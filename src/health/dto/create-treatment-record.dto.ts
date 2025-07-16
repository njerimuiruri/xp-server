import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsNumber,
  IsEnum,
} from 'class-validator';

enum TreatmentType {
  Curative = 'Curative',
  Preventive = 'Preventive',
  Supportive = 'Supportive',
  BehavioralAndAlternative = 'Behavioral and Alternative',
}

export class CreateTreatmentRecordDto {
  @ApiProperty({
    description: 'The ID of the animal or flock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  animalIdOrFlockId: string;

  @ApiProperty({
    description: 'The ID of the farm',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'The ID of the livestock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  livestockId: string;

  @ApiProperty({
    description: 'The date of the health event',
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  healthEventDate: Date;

  @ApiProperty({
    description: 'The symptoms of the health event',
    example: 'Fever and cough',
  })
  @IsString()
  @IsNotEmpty()
  healthEventSymptoms: string;

  @ApiProperty({
    description: 'The diagnosis of the health event',
    example: 'Pneumonia',
  })
  @IsString()
  @IsNotEmpty()
  diagnosis: string;

  @ApiProperty({
    description: 'The type of treatment given',
    enum: TreatmentType,
    example: 'Curative',
  })
  @IsEnum(TreatmentType)
  @IsNotEmpty()
  treatmentType: string;

  @ApiProperty({
    description: 'Description of the treatment if not curative',
    required: false,
    example: 'Administered antibiotics for 3 days',
  })
  @IsString()
  @IsOptional()
  treatmentDescription?: string;

  @ApiProperty({
    description: 'The drug administered for curative treatment',
    required: false,
    example: 'Amoxicillin',
  })
  @IsString()
  @IsOptional()
  drugAdministered?: string;

  @ApiProperty({
    description: 'The date the drug was administered',
    required: false,
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsOptional()
  dateAdministered?: Date;

  @ApiProperty({
    description: 'The dosage of the drug administered',
    required: false,
    example: 2,
  })
  @IsNumber()
  @IsOptional()
  dosageAdministered?: number;

  @ApiProperty({
    description: 'The cost of the drugs',
    required: false,
    example: 50.0,
  })
  @IsNumber()
  @IsOptional()
  costOfDrugs?: number;

  @ApiProperty({
    description: 'The name of the medical officer',
    required: false,
    example: 'Dr. Smith',
  })
  @IsString()
  @IsOptional()
  medicalOfficerName?: string;

  @ApiProperty({
    description: 'The license ID of the medical officer',
    required: false,
    example: 'VET12345',
  })
  @IsString()
  @IsOptional()
  licenseId?: string;

  @ApiProperty({
    description: 'The cost of the service',
    required: false,
    example: 25.0,
  })
  @IsNumber()
  @IsOptional()
  costOfService?: number;

  @ApiProperty({
    description: 'The name of the farmer or witness',
    required: false,
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  farmerWitnessName?: string;

  @ApiProperty({
    description: 'Additional notes',
    required: false,
    example: 'The animal is recovering well',
  })
  @IsString()
  @IsOptional()
  notes?: string;
}
