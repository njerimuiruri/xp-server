import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsNumber,
  IsEnum,
} from 'class-validator';

enum AdministeredByType {
  Veterinary = 'Veterinary',
  AITechnician = 'AI Technician',
}

export class CreateDewormingRecordDto {
  @ApiProperty({
    description: 'The ID of the animal or flock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  animalIdOrFlockId: string;

  @ApiProperty({
    description: 'The ID of the farm',
    example: 'farm12345',
  })
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'The ID of the livestock',
    example: 'livestock12345',
  })
  @IsString()
  @IsNotEmpty()
  livestockId: string;

  @ApiProperty({
    description: 'What the deworming is against',
    example: 'Roundworms',
  })
  @IsString()
  @IsNotEmpty()
  dewormingAgainst: string;

  @ApiProperty({
    description: 'The drug administered',
    example: 'Ivermectin',
  })
  @IsString()
  @IsNotEmpty()
  drugAdministered: string;

  @ApiProperty({
    description: 'The dosage administered',
    example: 1.5,
  })
  @IsNumber()
  @IsNotEmpty()
  dosage: number;

  @ApiProperty({
    description: 'The date the drug was administered',
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  dateAdministered: Date;

  @ApiProperty({
    description: 'The cost of the drug',
    example: 25.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  costOfVaccine?: number;

  @ApiProperty({
    description: 'The cost of the service',
    example: 50.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  costOfService?: number;

  @ApiProperty({
    description: 'Who administered the treatment',
    enum: AdministeredByType,
    example: AdministeredByType.Veterinary,
  })
  @IsEnum(AdministeredByType)
  @IsNotEmpty()
  administeredByType: string;

  @ApiProperty({
    description: 'The name of the person who administered the treatment',
    example: 'Dr. Jane Doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  administeredByName?: string;

  @ApiProperty({
    description: 'The practice ID if administered by a vet',
    example: 'VET12345',
    required: false,
  })
  @IsString()
  @IsOptional()
  practiceId?: string;

  @ApiProperty({
    description: 'The technician ID if administered by an AI technician',
    example: 'TECH12345',
    required: false,
  })
  @IsString()
  @IsOptional()
  technicianId?: string;

  @ApiProperty({
    description: 'The name of the farmer or witness',
    example: 'John Doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  farmerWitness?: string;

  @ApiProperty({
    description: 'Additional notes',
    example: 'The animal was showing signs of stomach worms',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
}
