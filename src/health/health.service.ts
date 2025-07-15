import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAllergyRecordDto } from './dto/create-allergy-record.dto';
import { UpdateAllergyRecordDto } from './dto/update-allergy-record.dto';
import { CreateBoosterRecordDto } from './dto/create-booster-record.dto';
import { UpdateBoosterRecordDto } from './dto/update-booster-record.dto';
import { CreateVaccinationRecordDto } from './dto/create-vaccination-record.dto';
import { UpdateVaccinationRecordDto } from './dto/update-vaccination-record.dto';
import { CreateTreatmentRecordDto } from './dto/create-treatment-record.dto';
import { UpdateTreatmentRecordDto } from './dto/update-treatment-record.dto';
import { CreateDewormingRecordDto } from './dto/create-deworming-record.dto';
import { UpdateDewormingRecordDto } from './dto/update-deworming-record.dto';
import { CreateGeneticDisorderRecordDto } from './dto/create-genetic-disorder-record.dto';
import { UpdateGeneticDisorderRecordDto } from './dto/update-genetic-disorder-record.dto';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  // Allergy Records
  async createAllergyRecord(createAllergyRecordDto: CreateAllergyRecordDto, userId: string) {
    const { farmId, livestockId, ...rest } = createAllergyRecordDto;
    return this.prisma.allergyRecord.create({
      data: {
        ...rest,
        farm: { connect: { id: farmId } },
        livestock: { connect: { id: livestockId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllAllergyRecords(farmId: string) {
    return this.prisma.allergyRecord.findMany({
      where: { farmId },
    });
  }

  async findOneAllergyRecord(id: string) {
    const allergyRecord = await this.prisma.allergyRecord.findUnique({
      where: { id },
    });
    if (!allergyRecord) {
      throw new NotFoundException(`Allergy record with ID ${id} not found`);
    }
    return allergyRecord;
  }

  async updateAllergyRecord(id: string, updateAllergyRecordDto: UpdateAllergyRecordDto) {
    return this.prisma.allergyRecord.update({
      where: { id },
      data: updateAllergyRecordDto,
    });
  }

  async removeAllergyRecord(id: string) {
    await this.findOneAllergyRecord(id); // Ensures the record exists before attempting to delete
    return this.prisma.allergyRecord.delete({ where: { id } });
  }

  // Booster Records
  async createBoosterRecord(createBoosterRecordDto: CreateBoosterRecordDto, userId: string) {
    const { farmId, livestockId, ...rest } = createBoosterRecordDto;
    return this.prisma.boosterRecord.create({
      data: {
        ...rest,
        farm: { connect: { id: farmId } },
        livestock: { connect: { id: livestockId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllBoosterRecords(farmId: string) {
    return this.prisma.boosterRecord.findMany({ where: { farmId } });
  }

  async findOneBoosterRecord(id: string) {
    const boosterRecord = await this.prisma.boosterRecord.findUnique({ where: { id } });
    if (!boosterRecord) {
      throw new NotFoundException(`Booster record with ID ${id} not found`);
    }
    return boosterRecord;
  }

  async updateBoosterRecord(id: string, updateBoosterRecordDto: UpdateBoosterRecordDto) {
    return this.prisma.boosterRecord.update({
      where: { id },
      data: updateBoosterRecordDto,
    });
  }

  async removeBoosterRecord(id: string) {
    await this.findOneBoosterRecord(id);
    return this.prisma.boosterRecord.delete({ where: { id } });
  }

  // Vaccination Records
  async createVaccinationRecord(createVaccinationRecordDto: CreateVaccinationRecordDto, userId: string) {
    const { farmId, livestockId, ...rest } = createVaccinationRecordDto;
    return this.prisma.vaccinationRecord.create({
      data: {
        ...rest,
        farm: { connect: { id: farmId } },
        livestock: { connect: { id: livestockId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllVaccinationRecords(farmId: string) {
    return this.prisma.vaccinationRecord.findMany({ where: { farmId } });
  }

  async findOneVaccinationRecord(id: string) {
    const vaccinationRecord = await this.prisma.vaccinationRecord.findUnique({ where: { id } });
    if (!vaccinationRecord) {
      throw new NotFoundException(`Vaccination record with ID ${id} not found`);
    }
    return vaccinationRecord;
  }

  async updateVaccinationRecord(id: string, updateVaccinationRecordDto: UpdateVaccinationRecordDto) {
    return this.prisma.vaccinationRecord.update({
      where: { id },
      data: updateVaccinationRecordDto,
    });
  }

  async removeVaccinationRecord(id: string) {
    await this.findOneVaccinationRecord(id);
    return this.prisma.vaccinationRecord.delete({ where: { id } });
  }

  // Treatment Records
  async createTreatmentRecord(createTreatmentRecordDto: CreateTreatmentRecordDto, userId: string) {
    const { farmId, livestockId, ...rest } = createTreatmentRecordDto;
    return this.prisma.treatmentRecord.create({
      data: {
        ...rest,
        farm: { connect: { id: farmId } },
        livestock: { connect: { id: livestockId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllTreatmentRecords(farmId: string) {
    return this.prisma.treatmentRecord.findMany({ where: { farmId } });
  }

  async findOneTreatmentRecord(id: string) {
    const treatmentRecord = await this.prisma.treatmentRecord.findUnique({ where: { id } });
    if (!treatmentRecord) {
      throw new NotFoundException(`Treatment record with ID ${id} not found`);
    }
    return treatmentRecord;
  }

  async updateTreatmentRecord(id: string, updateTreatmentRecordDto: UpdateTreatmentRecordDto) {
    return this.prisma.treatmentRecord.update({
      where: { id },
      data: updateTreatmentRecordDto,
    });
  }

  async removeTreatmentRecord(id: string) {
    await this.findOneTreatmentRecord(id);
    return this.prisma.treatmentRecord.delete({ where: { id } });
  }

  // Deworming Records
  async createDewormingRecord(createDewormingRecordDto: CreateDewormingRecordDto, userId: string) {
    const { farmId, livestockId, ...rest } = createDewormingRecordDto;
    return this.prisma.dewormingRecord.create({
      data: {
        ...rest,
        farm: { connect: { id: farmId } },
        livestock: { connect: { id: livestockId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllDewormingRecords(farmId: string) {
    return this.prisma.dewormingRecord.findMany({ where: { farmId } });
  }

  async findOneDewormingRecord(id: string) {
    const dewormingRecord = await this.prisma.dewormingRecord.findUnique({ where: { id } });
    if (!dewormingRecord) {
      throw new NotFoundException(`Deworming record with ID ${id} not found`);
    }
    return dewormingRecord;
  }

  async updateDewormingRecord(id: string, updateDewormingRecordDto: UpdateDewormingRecordDto) {
    return this.prisma.dewormingRecord.update({
      where: { id },
      data: updateDewormingRecordDto,
    });
  }

  async removeDewormingRecord(id: string) {
    await this.findOneDewormingRecord(id);
    return this.prisma.dewormingRecord.delete({ where: { id } });
  }

  // Genetic Disorder Records
  async createGeneticDisorderRecord(createGeneticDisorderRecordDto: CreateGeneticDisorderRecordDto, userId: string) {
    const { farmId, livestockId, ...rest } = createGeneticDisorderRecordDto;
    return this.prisma.geneticDisorderRecord.create({
      data: {
        ...rest,
        farm: { connect: { id: farmId } },
        livestock: { connect: { id: livestockId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAllGeneticDisorderRecords(farmId: string) {
    return this.prisma.geneticDisorderRecord.findMany({ where: { farmId } });
  }

  async findOneGeneticDisorderRecord(id: string) {
    const geneticDisorderRecord = await this.prisma.geneticDisorderRecord.findUnique({ where: { id } });
    if (!geneticDisorderRecord) {
      throw new NotFoundException(`Genetic disorder record with ID ${id} not found`);
    }
    return geneticDisorderRecord;
  }

  async updateGeneticDisorderRecord(id: string, updateGeneticDisorderRecordDto: UpdateGeneticDisorderRecordDto) {
    return this.prisma.geneticDisorderRecord.update({
      where: { id },
      data: updateGeneticDisorderRecordDto,
    });
  }

  async removeGeneticDisorderRecord(id: string) {
    await this.findOneGeneticDisorderRecord(id);
    return this.prisma.geneticDisorderRecord.delete({ where: { id } });
  }
}
