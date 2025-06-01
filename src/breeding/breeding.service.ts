import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateBreedingRecordDto,
  UpdateBreedingRecordDto,
  RecordBirthDto,
  RegisterOffspringDto,
} from './dto';

@Injectable()
export class BreedingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBreedingRecordDto: CreateBreedingRecordDto) {
    const { damId, sireId, farmId } = createBreedingRecordDto;

    // Verify dam exists and is a female
    const dam = await this.prisma.livestock.findUnique({
      where: { id: damId },
      include: { mammal: true },
    });

    if (!dam) {
      throw new NotFoundException(`Dam with ID ${damId} not found`);
    }

    if (dam.category !== 'mammal') {
      throw new BadRequestException('Dam must be a mammal');
    }

    if (dam.mammal?.gender !== 'female') {
      throw new BadRequestException('Dam must be a female animal');
    }

    // If sireId is provided, verify sire exists and is a male
    if (sireId) {
      const sire = await this.prisma.livestock.findUnique({
        where: { id: sireId },
        include: { mammal: true },
      });

      if (!sire) {
        throw new NotFoundException(`Sire with ID ${sireId} not found`);
      }

      if (sire.category !== 'mammal') {
        throw new BadRequestException('Sire must be a mammal');
      }

      if (sire.mammal?.gender !== 'male') {
        throw new BadRequestException('Sire must be a male animal');
      }
    }

    // Verify farm exists
    const farm = await this.prisma.farm.findUnique({
      where: { id: farmId },
    });

    if (!farm) {
      throw new NotFoundException(`Farm with ID ${farmId} not found`);
    }

    // Create breeding record
    return this.prisma.breedingRecord.create({
      data: createBreedingRecordDto,
      include: {
        dam: true,
        sire: true,
        farm: true,
      },
    });
  }

  async findAll(farmId?: string) {
    const where = farmId ? { farmId } : {};

    return this.prisma.breedingRecord.findMany({
      where,
      include: {
        dam: {
          include: {
            mammal: true,
          },
        },
        sire: {
          include: {
            mammal: true,
          },
        },
        offspring: true,
      },
      orderBy: {
        serviceDate: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const breedingRecord = await this.prisma.breedingRecord.findUnique({
      where: { id },
      include: {
        dam: {
          include: {
            mammal: true,
          },
        },
        sire: {
          include: {
            mammal: true,
          },
        },
        offspring: true,
        farm: true,
      },
    });

    if (!breedingRecord) {
      throw new NotFoundException(`Breeding record with ID ${id} not found`);
    }

    return breedingRecord;
  }

  async update(id: string, updateBreedingRecordDto: UpdateBreedingRecordDto) {
    // Check if breeding record exists
    const existingRecord = await this.prisma.breedingRecord.findUnique({
      where: { id },
    });

    if (!existingRecord) {
      throw new NotFoundException(`Breeding record with ID ${id} not found`);
    }

    // If damId or sireId is being updated, perform validation
    if (updateBreedingRecordDto.damId) {
      const dam = await this.prisma.livestock.findUnique({
        where: { id: updateBreedingRecordDto.damId },
        include: { mammal: true },
      });

      if (!dam) {
        throw new NotFoundException(
          `Dam with ID ${updateBreedingRecordDto.damId} not found`,
        );
      }

      if (dam.category !== 'mammal' || dam.mammal?.gender !== 'female') {
        throw new BadRequestException('Dam must be a female mammal');
      }
    }

    if (updateBreedingRecordDto.sireId) {
      const sire = await this.prisma.livestock.findUnique({
        where: { id: updateBreedingRecordDto.sireId },
        include: { mammal: true },
      });

      if (!sire) {
        throw new NotFoundException(
          `Sire with ID ${updateBreedingRecordDto.sireId} not found`,
        );
      }

      if (sire.category !== 'mammal' || sire.mammal?.gender !== 'male') {
        throw new BadRequestException('Sire must be a male mammal');
      }
    }

    // Update the breeding record
    return this.prisma.breedingRecord.update({
      where: { id },
      data: updateBreedingRecordDto,
      include: {
        dam: true,
        sire: true,
        offspring: true,
        farm: true,
      },
    });
  }

  async recordBirth(id: string, recordBirthDto: RecordBirthDto) {
    // Check if breeding record exists
    const breedingRecord = await this.prisma.breedingRecord.findUnique({
      where: { id },
    });

    if (!breedingRecord) {
      throw new NotFoundException(`Breeding record with ID ${id} not found`);
    }

    // Check if birth is already recorded
    if (breedingRecord.birthRecorded) {
      throw new BadRequestException(
        'Birth is already recorded for this breeding record',
      );
    }

    const {
      birthDate,
      deliveryMethod,
      youngOnes,
      birthWeight,
      litterWeight,
      offspringSex,
      offspring,
    } = recordBirthDto;

    // Validate number of offspring matches the youngOnes count
    if (offspring.length !== youngOnes) {
      throw new BadRequestException(
        `Number of offspring details (${offspring.length}) does not match the youngOnes count (${youngOnes})`,
      );
    }

    // Start a transaction to update breeding record and create offspring records
    return this.prisma.$transaction(async (prisma) => {
      // Update breeding record with birth details
      const updatedBreedingRecord = await prisma.breedingRecord.update({
        where: { id },
        data: {
          birthRecorded: true,
          birthDate,
          deliveryMethod,
          youngOnes,
          birthWeight,
          litterWeight,
          offspringSex,
        },
      });

      // Create offspring records
      const offspringRecords = await Promise.all(
        offspring.map(async (offspringItem) => {
          return prisma.offspring.create({
            data: {
              breedingRecordId: id,
              offspringId: offspringItem.offspringId,
              sex: offspringItem.sex,
              birthWeight: offspringItem.birthWeight,
              notes: offspringItem.notes,
            },
          });
        }),
      );

      return {
        ...updatedBreedingRecord,
        offspring: offspringRecords,
      };
    });
  }

  async registerOffspringAsLivestock(
    offspringId: string,
    livestockData: RegisterOffspringDto,
  ) {
    // Find the offspring record
    const offspring = await this.prisma.offspring.findUnique({
      where: { id: offspringId },
      include: {
        breedingRecord: {
          include: {
            dam: true,
            sire: true,
          },
        },
      },
    });

    if (!offspring) {
      throw new NotFoundException(`Offspring with ID ${offspringId} not found`);
    }

    // Check if already registered as livestock
    if (offspring.livestockId) {
      throw new BadRequestException(
        'Offspring is already registered as livestock',
      );
    }

    // Create a new livestock record
    const newLivestock = await this.prisma.livestock.create({
      data: {
        farmId: offspring.breedingRecord.farmId,
        category: 'mammal', // Assuming all offspring are mammals
        type: livestockData.type,
        status: 'active',
      },
    });

    // Create mammal record with details from offspring
    const mammal = await this.prisma.mammal.create({
      data: {
        livestockId: newLivestock.id,
        idNumber: offspring.offspringId,
        breedType: livestockData.breedType,
        phenotype: livestockData.phenotype,
        dateOfBirth: offspring.breedingRecord.birthDate
          .toISOString()
          .split('T')[0],
        gender: offspring.sex,
        sireId: offspring.breedingRecord.sireId,
        sireCode: offspring.breedingRecord.sireCode,
        damId: offspring.breedingRecord.damId,
        birthWeight: offspring.birthWeight,
        currentWeight: livestockData.currentWeight,
      },
    });

    // Update offspring with livestock ID
    await this.prisma.offspring.update({
      where: { id: offspringId },
      data: {
        livestockId: newLivestock.id,
      },
    });

    return {
      livestock: newLivestock,
      mammal,
      message: 'Offspring successfully registered as livestock',
    };
  }

  async remove(id: string) {
    // Check if breeding record exists
    const breedingRecord = await this.prisma.breedingRecord.findUnique({
      where: { id },
      include: {
        offspring: true,
      },
    });

    if (!breedingRecord) {
      throw new NotFoundException(`Breeding record with ID ${id} not found`);
    }

    // If birth is recorded and there are offspring, prevent deletion
    if (breedingRecord.birthRecorded && breedingRecord.offspring.length > 0) {
      throw new BadRequestException(
        'Cannot delete breeding record with registered offspring',
      );
    }

    // Delete the breeding record
    return this.prisma.breedingRecord.delete({
      where: { id },
    });
  }

  async getBreedingStatistics(farmId: string) {
    // Get all breeding records for the farm
    const breedingRecords = await this.prisma.breedingRecord.findMany({
      where: { farmId },
      include: {
        offspring: true,
      },
    });

    // Calculate statistics
    const totalBreedingRecords = breedingRecords.length;
    const completedBreedings = breedingRecords.filter(
      (record) => record.birthRecorded,
    ).length;
    const pendingBreedings = totalBreedingRecords - completedBreedings;

    const totalOffspring = breedingRecords.reduce(
      (sum, record) => sum + (record.youngOnes || 0),
      0,
    );

    const successRate =
      totalBreedingRecords > 0
        ? (completedBreedings / totalBreedingRecords) * 100
        : 0;

    // Get breeding records by purpose
    const breedingsByPurpose = {};
    breedingRecords.forEach((record) => {
      breedingsByPurpose[record.purpose] =
        (breedingsByPurpose[record.purpose] || 0) + 1;
    });

    // Get breeding records by strategy
    const breedingsByStrategy = {};
    breedingRecords.forEach((record) => {
      breedingsByStrategy[record.strategy] =
        (breedingsByStrategy[record.strategy] || 0) + 1;
    });

    // Get breeding records by service type
    const breedingsByServiceType = {};
    breedingRecords.forEach((record) => {
      breedingsByServiceType[record.serviceType] =
        (breedingsByServiceType[record.serviceType] || 0) + 1;
    });

    return {
      totalBreedingRecords,
      completedBreedings,
      pendingBreedings,
      totalOffspring,
      successRate: Math.round(successRate * 100) / 100, // Round to 2 decimal places
      breedingsByPurpose,
      breedingsByStrategy,
      breedingsByServiceType,
    };
  }
}
