import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLivestockDto } from './dto/create-livestock.dto';
import { UpdateLivestockDto } from './dto/update-livestock.dto';

@Injectable()
export class LivestockService {
  constructor(private prisma: PrismaService) {}

  async create(createLivestockDto: CreateLivestockDto) {
    const { farmId, category, type, mammal, poultry } = createLivestockDto;

    // Verify that the farm exists
    const farm = await this.prisma.farm.findUnique({
      where: { id: farmId },
    });

    if (!farm) {
      throw new NotFoundException(`Farm with ID ${farmId} not found`);
    }

    // Validate that the correct data is provided based on category
    if (category === 'mammal' && !mammal) {
      throw new BadRequestException(
        'Mammal details are required for mammal livestock',
      );
    }

    if (category === 'poultry' && !poultry) {
      throw new BadRequestException(
        'Poultry details are required for poultry livestock',
      );
    }

    // Check for duplicate ID numbers for mammals
    if (category === 'mammal' && mammal) {
      const existingMammal = await this.prisma.mammal.findUnique({
        where: { idNumber: mammal.idNumber },
      });

      if (existingMammal) {
        throw new BadRequestException(
          `An animal with ID Number '${mammal.idNumber}' already exists`,
        );
      }
    }

    // Check for duplicate flock IDs for poultry
    if (category === 'poultry' && poultry) {
      const existingPoultry = await this.prisma.poultry.findUnique({
        where: { flockId: poultry.flockId },
      });

      if (existingPoultry) {
        throw new BadRequestException(
          `A poultry flock with ID '${poultry.flockId}' already exists`,
        );
      }
    }

    // Create the livestock with transaction to ensure all related data is created
    return this.prisma.$transaction(async (prisma) => {
      // Create the livestock record
      const livestock = await prisma.livestock.create({
        data: {
          farmId,
          type,
          category,
        },
      });

      // Create the specific category details
      if (category === 'mammal' && mammal) {
        await prisma.mammal.create({
          data: {
            livestockId: livestock.id,
            idNumber: mammal.idNumber,
            breedType: mammal.breedType,
            phenotype: mammal.phenotype,
            dateOfBirth: new Date(mammal.dateOfBirth),
            gender: mammal.gender,
            sireId: mammal.sireId,
            sireCode: mammal.sireCode,
            damId: mammal.damId,
            damCode: mammal.damCode,
            birthWeight: mammal.birthWeight,
          },
        });
      } else if (category === 'poultry' && poultry) {
        await prisma.poultry.create({
          data: {
            livestockId: livestock.id,
            flockId: poultry.flockId,
            dateOfStocking: new Date(poultry.dateOfStocking),
            gender: poultry.gender,
            initialQuantity: poultry.initialQuantity,
            currentQuantity: poultry.currentQuantity || poultry.initialQuantity, // Default to initial quantity
            breedType: poultry.breedType,
            sourceOfBirds: poultry.sourceOfBirds,
            initialAverageWeight: poultry.initialAverageWeight,
          },
        });
      }

      // Return the complete livestock record with related data
      return this.findOne(livestock.id);
    });
  }

  async findAll(page = 1, limit = 10, search?: string, farmId?: string, type?: string) {
    page = Number(page) > 0 ? Number(page) : 1;
    limit = Number(limit) > 0 ? Number(limit) : 10;
    const skip = (page - 1) * limit;

    let where: any = {};

    // Add search conditions if provided
    if (search) {
      where.OR = [
        {
          mammal: {
            OR: [
              { idNumber: { contains: search, mode: 'insensitive' as const } },
              { breedType: { contains: search, mode: 'insensitive' as const } },
            ],
          },
        },
        {
          poultry: {
            OR: [
              { flockId: { contains: search, mode: 'insensitive' as const } },
              { breedType: { contains: search, mode: 'insensitive' as const } },
            ],
          },
        },
      ];
    }

    // Filter by farm if provided
    if (farmId) {
      where.farmId = farmId;
    }

    // Filter by type if provided
    if (type) {
      where.type = type;
    }

    const [livestock, total] = await Promise.all([
      this.prisma.livestock.findMany({
        skip,
        take: limit,
        where,
        include: {
          farm: {
            select: {
              id: true,
              name: true,
              county: true,
              administrativeLocation: true,
            },
          },
          mammal: true,
          poultry: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.livestock.count({ where }),
    ]);

    const pages = Math.ceil(total / limit);

    return {
      data: livestock,
      meta: {
        total,
        page,
        pages,
        hasNextPage: page < pages,
        hasPrevPage: page > 1,
      },
    };
  }

  async findOne(id: string) {
    const livestock = await this.prisma.livestock.findUnique({
      where: { id },
      include: {
        farm: {
          select: {
            id: true,
            name: true,
            county: true,
            administrativeLocation: true,
          },
        },
        mammal: true,
        poultry: true,
      },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${id} not found`);
    }

    return livestock;
  }

  async update(id: string, updateLivestockDto: UpdateLivestockDto) {
    const { mammal, poultry, ...livestockData } = updateLivestockDto;

    // Check if livestock exists
    const existingLivestock = await this.prisma.livestock.findUnique({
      where: { id },
      include: {
        mammal: true,
        poultry: true,
      },
    });

    if (!existingLivestock) {
      throw new NotFoundException(`Livestock with ID ${id} not found`);
    }

    // If farmId is provided, verify that the farm exists
    if (livestockData.farmId) {
      const farm = await this.prisma.farm.findUnique({
        where: { id: livestockData.farmId },
      });

      if (!farm) {
        throw new NotFoundException(`Farm with ID ${livestockData.farmId} not found`);
      }
    }

    // Check for duplicate ID numbers for mammals
    if (mammal?.idNumber && mammal.idNumber !== existingLivestock.mammal?.idNumber) {
      const existingMammal = await this.prisma.mammal.findUnique({
        where: { idNumber: mammal.idNumber },
      });

      if (existingMammal) {
        throw new BadRequestException(
          `An animal with ID Number '${mammal.idNumber}' already exists`,
        );
      }
    }

    // Check for duplicate flock IDs for poultry
    if (poultry?.flockId && poultry.flockId !== existingLivestock.poultry?.flockId) {
      const existingPoultry = await this.prisma.poultry.findUnique({
        where: { flockId: poultry.flockId },
      });

      if (existingPoultry) {
        throw new BadRequestException(
          `A poultry flock with ID '${poultry.flockId}' already exists`,
        );
      }
    }

    // Update the livestock with transaction to ensure all related data is updated
    return this.prisma.$transaction(async (prisma) => {
      // Update the livestock record
      if (Object.keys(livestockData).length > 0) {
        await prisma.livestock.update({
          where: { id },
          data: livestockData,
        });
      }

      // Update mammal details if provided
      if (mammal && existingLivestock.category === 'mammal' && existingLivestock.mammal) {
        const mammalData: any = { ...mammal };
        
        // Convert date strings to Date objects if provided
        if (mammalData.dateOfBirth) {
          mammalData.dateOfBirth = new Date(mammalData.dateOfBirth);
        }

        await prisma.mammal.update({
          where: { livestockId: id },
          data: mammalData,
        });
      }

      // Update poultry details if provided
      if (poultry && existingLivestock.category === 'poultry' && existingLivestock.poultry) {
        const poultryData: any = { ...poultry };
        
        // Convert date strings to Date objects if provided
        if (poultryData.dateOfStocking) {
          poultryData.dateOfStocking = new Date(poultryData.dateOfStocking);
        }

        await prisma.poultry.update({
          where: { livestockId: id },
          data: poultryData,
        });
      }

      // Return the updated livestock record with related data
      return this.findOne(id);
    });
  }

  async remove(id: string) {
    const livestock = await this.prisma.livestock.findUnique({
      where: { id },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${id} not found`);
    }

    // Delete the livestock (cascade will handle related records)
    await this.prisma.livestock.delete({
      where: { id },
    });

    return { message: 'Livestock deleted successfully' };
  }
}
