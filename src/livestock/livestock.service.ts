import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLivestockDto } from './dto/create-livestock.dto';
import { UpdateLivestockDto } from './dto/update-livestock.dto';
import { RecordMortalityDto } from './dto/record-mortality.dto';
import { UpdateLivestockStatusDto, LivestockStatus } from './dto/update-livestock-status.dto';
import { CreateHealthEventDto } from './dto/create-health-event.dto';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { CreateSaleDto } from './dto/create-sale.dto';

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
      const existingMammal = await this.prisma.livestock.findFirst({
        where: {
          category: 'mammal',
          mammal: {
            idNumber: mammal.idNumber,
          },
        },
      });

      if (existingMammal) {
        throw new BadRequestException(
          `An animal with ID Number '${mammal.idNumber}' already exists`,
        );
      }
    }

    // Check for duplicate flock IDs for poultry
    if (category === 'poultry' && poultry) {
      const existingPoultry = await this.prisma.livestock.findFirst({
        where: {
          category: 'poultry',
          poultry: {
            flockId: poultry.flockId,
          },
        },
      });

      if (existingPoultry) {
        throw new BadRequestException(
          `A poultry flock with ID '${poultry.flockId}' already exists`,
        );
      }
    }

    // Create the livestock with transaction to ensure all related data is created
    return this.prisma.$transaction(async (prisma) => {
      // Create the livestock record with the specific category details
      const livestock = await prisma.livestock.create({
        data: {
          farmId,
          type,
          category,
          mammal:
            category === 'mammal' && mammal
              ? {
                  create: {
                    idNumber: mammal.idNumber,
                    breedType: mammal.breedType,
                    phenotype: mammal.phenotype,
                    dateOfBirth: mammal.dateOfBirth,
                    gender: mammal.gender,
                    sireId: mammal.sireId,
                    sireCode: mammal.sireCode,
                    damId: mammal.damId,
                    damCode: mammal.damCode,
                    birthWeight: mammal.birthWeight,
                  },
                }
              : undefined,
          poultry:
            category === 'poultry' && poultry
              ? {
                  create: {
                    flockId: poultry.flockId,
                    dateOfStocking: poultry.dateOfStocking,
                    gender: poultry.gender,
                    initialQuantity: poultry.initialQuantity,
                    currentQuantity:
                      poultry.currentQuantity || poultry.initialQuantity,
                    breedType: poultry.breedType,
                    sourceOfBirds: poultry.sourceOfBirds,
                  },
                }
              : undefined,
        },
      });

      // Fetch the complete livestock record with relations using the transaction's Prisma instance
      const fullLivestock = await prisma.livestock.findUnique({
        where: { id: livestock.id },
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

      return fullLivestock;
    });
  }

  async findAll(
    page = 1,
    limit = 10,
    search?: string,
    farmId?: string,
    type?: string,
  ) {
    page = Number(page) > 0 ? Number(page) : 1;
    limit = Number(limit) > 0 ? Number(limit) : 10;
    const skip = (page - 1) * limit;

    let where: any = {};

    // Add search conditions if provided
    if (search) {
      where.OR = [
        {
          mammal: {
            path: ['idNumber'],
            string_contains: search,
          },
        },
        {
          mammal: {
            path: ['breedType'],
            string_contains: search,
          },
        },
        {
          poultry: {
            path: ['flockId'],
            string_contains: search,
          },
        },
        {
          poultry: {
            path: ['breedType'],
            string_contains: search,
          },
        },
        {
          type: {
            contains: search,
            mode: 'insensitive',
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
        mortality: true,
        healthEvent: {
          orderBy: {
            date: 'desc',
          },
        },
        sale: true,
        transfer: true,
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
        throw new NotFoundException(
          `Farm with ID ${livestockData.farmId} not found`,
        );
      }
    }

    // Check for duplicate ID numbers for mammals
    if (mammal?.idNumber && existingLivestock.category === 'mammal') {
      const existingMammalData = existingLivestock.mammal as any;
      if (mammal.idNumber !== existingMammalData?.idNumber) {
        const existingMammal = await this.prisma.livestock.findFirst({
          where: {
            category: 'mammal',
            mammal: {
              idNumber: mammal.idNumber,
            },
            id: { not: id },
          },
        });

        if (existingMammal) {
          throw new BadRequestException(
            `An animal with ID Number '${mammal.idNumber}' already exists`,
          );
        }
      }
    }

    // Check for duplicate flock IDs for poultry
    if (poultry?.flockId && existingLivestock.category === 'poultry') {
      const existingPoultryData = existingLivestock.poultry as any;
      if (poultry.flockId !== existingPoultryData?.flockId) {
        const existingPoultry = await this.prisma.livestock.findFirst({
          where: {
            category: 'poultry',
            poultry: {
              flockId: poultry.flockId,
            },
            id: { not: id },
          },
        });

        if (existingPoultry) {
          throw new BadRequestException(
            `A poultry flock with ID '${poultry.flockId}' already exists`,
          );
        }
      }
    }

    // Prepare update data
    const updateData: any = { ...livestockData };

    // Update mammal details if provided
    if (mammal && existingLivestock.category === 'mammal') {
      updateData.mammal = {
        update: mammal,
      };
    }

    // Update poultry details if provided
    if (poultry && existingLivestock.category === 'poultry') {
      updateData.poultry = {
        update: poultry,
      };
    }

    // Update the livestock record
    await this.prisma.livestock.update({
      where: { id },
      data: updateData,
    });

    // Return the updated livestock record
    return this.findOne(id);
  }

  async remove(id: string) {
    const livestock = await this.prisma.livestock.findUnique({
      where: { id },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${id} not found`);
    }

    // Delete the livestock
    await this.prisma.livestock.delete({
      where: { id },
    });

    return { message: 'Livestock deleted successfully' };
  }

  async updateStatus(id: string, updateStatusDto: UpdateLivestockStatusDto) {
    // Check if livestock exists
    const livestock = await this.prisma.livestock.findUnique({
      where: { id },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${id} not found`);
    }

    // Update the livestock status
    const updatedLivestock = await this.prisma.livestock.update({
      where: { id },
      data: {
        status: updateStatusDto.status,
      },
    });

    return this.findOne(id);
  }

  async recordMortality(recordMortalityDto: RecordMortalityDto) {
    const { livestockId, date, cause, description, reportedBy, attachments } = recordMortalityDto;

    // Check if livestock exists
    const livestock = await this.prisma.livestock.findUnique({
      where: { id: livestockId },
      include: {
        mortality: true,
      },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${livestockId} not found`);
    }

    // Check if mortality is already recorded
    if (livestock.mortality) {
      throw new ConflictException(`Mortality already recorded for livestock with ID ${livestockId}`);
    }

    // Record mortality and update livestock status in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create mortality record
      const mortality = await prisma.mortality.create({
        data: {
          livestockId,
          date: new Date(date),
          cause,
          description,
          reportedBy,
          attachments: attachments || [],
        },
      });

      // Update livestock status to deceased
      await prisma.livestock.update({
        where: { id: livestockId },
        data: {
          status: LivestockStatus.DECEASED,
        },
      });

      return this.findOne(livestockId);
    });
  }

  async createHealthEvent(createHealthEventDto: CreateHealthEventDto) {
    const { 
      livestockId, 
      eventType, 
      date, 
      description, 
      performedBy, 
      medications, 
      dosage, 
      cost, 
      nextScheduled, 
      attachments 
    } = createHealthEventDto;

    // Check if livestock exists
    const livestock = await this.prisma.livestock.findUnique({
      where: { id: livestockId },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${livestockId} not found`);
    }

    // Create health event
    const healthEvent = await this.prisma.healthEvent.create({
      data: {
        livestockId,
        eventType,
        date: new Date(date),
        description,
        performedBy,
        medications: medications || [],
        dosage,
        cost,
        nextScheduled: nextScheduled ? new Date(nextScheduled) : null,
        attachments: attachments || [],
      },
    });

    return this.findOne(livestockId);
  }

  async createTransfer(createTransferDto: CreateTransferDto) {
    const { 
      livestockId, 
      fromFarmId, 
      toFarmId, 
      transferDate, 
      reason, 
      transportMethod, 
      handlingPrecautions, 
      attachments 
    } = createTransferDto;

    // Check if livestock exists
    const livestock = await this.prisma.livestock.findUnique({
      where: { id: livestockId },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${livestockId} not found`);
    }

    // Check if source farm exists
    const sourceFarm = await this.prisma.farm.findUnique({
      where: { id: fromFarmId },
    });

    if (!sourceFarm) {
      throw new NotFoundException(`Source farm with ID ${fromFarmId} not found`);
    }

    // Check if destination farm exists
    const destinationFarm = await this.prisma.farm.findUnique({
      where: { id: toFarmId },
    });

    if (!destinationFarm) {
      throw new NotFoundException(`Destination farm with ID ${toFarmId} not found`);
    }

    // Verify the livestock is currently at the source farm
    if (livestock.farmId !== fromFarmId) {
      throw new BadRequestException(`Livestock is not currently at the specified source farm`);
    }

    // Create transfer and update livestock farm in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create transfer record
      const transfer = await prisma.transfer.create({
        data: {
          livestockId,
          fromFarmId,
          toFarmId,
          transferDate: new Date(transferDate),
          reason,
          transportMethod,
          handlingPrecautions,
          attachments: attachments || [],
        },
      });

      // Update livestock farm and status
      await prisma.livestock.update({
        where: { id: livestockId },
        data: {
          farmId: toFarmId,
          status: LivestockStatus.TRANSFERRED,
        },
      });

      return this.findOne(livestockId);
    });
  }

  async createSale(createSaleDto: CreateSaleDto) {
    const { 
      livestockId, 
      saleDate, 
      buyerName, 
      buyerContact, 
      saleAmount, 
      paymentMethod, 
      receiptNumber, 
      notes, 
      attachments 
    } = createSaleDto;

    // Check if livestock exists
    const livestock = await this.prisma.livestock.findUnique({
      where: { id: livestockId },
    });

    if (!livestock) {
      throw new NotFoundException(`Livestock with ID ${livestockId} not found`);
    }

    // Check if livestock is already sold
    if (livestock.status === LivestockStatus.SOLD) {
      throw new ConflictException(`Livestock with ID ${livestockId} is already sold`);
    }

    // Create sale and update livestock status in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create sale record
      const sale = await prisma.sale.create({
        data: {
          livestockId,
          saleDate: new Date(saleDate),
          buyerName,
          buyerContact,
          saleAmount,
          paymentMethod,
          receiptNumber,
          notes,
          attachments: attachments || [],
        },
      });

      // Update livestock status to sold
      await prisma.livestock.update({
        where: { id: livestockId },
        data: {
          status: LivestockStatus.SOLD,
        },
      });

      return this.findOne(livestockId);
    });
  }

  async getLivestockStatistics(farmId?: string) {
    // Base query conditions
    const where: any = {};
    
    // Filter by farm if provided
    if (farmId) {
      where.farmId = farmId;
    }

    // Get counts by category and status
    const [totalLivestock, activeLivestock, deceasedLivestock, soldLivestock, transferredLivestock, mammals, poultry] = 
      await Promise.all([
        this.prisma.livestock.count({ where }),
        this.prisma.livestock.count({ where: { ...where, status: LivestockStatus.ACTIVE } }),
        this.prisma.livestock.count({ where: { ...where, status: LivestockStatus.DECEASED } }),
        this.prisma.livestock.count({ where: { ...where, status: LivestockStatus.SOLD } }),
        this.prisma.livestock.count({ where: { ...where, status: LivestockStatus.TRANSFERRED } }),
        this.prisma.livestock.count({ where: { ...where, category: 'mammal' } }),
        this.prisma.livestock.count({ where: { ...where, category: 'poultry' } }),
      ]);

    // Get counts by type
    const typeDistribution = await this.prisma.livestock.groupBy({
      by: ['type'],
      where,
      _count: true,
    });

    // Format type distribution
    const typeStats = {};
    typeDistribution.forEach(item => {
      typeStats[item.type] = item._count;
    });

    // Get recent mortality events
    const recentMortality = await this.prisma.mortality.findMany({
      where: farmId ? { livestock: { farmId } } : {},
      take: 5,
      orderBy: { date: 'desc' },
      include: {
        livestock: {
          select: {
            id: true,
            type: true,
            category: true,
            mammal: {
              select: {
                idNumber: true,
                breedType: true,
              },
            },
            poultry: {
              select: {
                flockId: true,
                breedType: true,
              },
            },
          },
        },
      },
    });

    // Get recent health events
    const recentHealthEvents = await this.prisma.healthEvent.findMany({
      where: farmId ? { livestock: { farmId } } : {},
      take: 5,
      orderBy: { date: 'desc' },
      include: {
        livestock: {
          select: {
            id: true,
            type: true,
            category: true,
            mammal: {
              select: {
                idNumber: true,
                breedType: true,
              },
            },
            poultry: {
              select: {
                flockId: true,
                breedType: true,
              },
            },
          },
        },
      },
    });

    return {
      summary: {
        total: totalLivestock,
        active: activeLivestock,
        deceased: deceasedLivestock,
        sold: soldLivestock,
        transferred: transferredLivestock,
        mammals,
        poultry,
      },
      typeDistribution: typeStats,
      recentMortality,
      recentHealthEvents,
    };
  }
}
