import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsEnum,
} from 'class-validator';

enum AdministeredByType {
  Veterinary = 'Veterinary',
  AITechnician = 'AI Technician',
}

export class CreateGeneticDisorderRecordDto {
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
    description: 'The date the disorder was recorded',
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  dateRecorded: Date;

  @ApiProperty({
    description: 'The name of the genetic condition',
    example: 'Osteogenesis Imperfecta',
  })
  @IsString()
  @IsNotEmpty()
  nameOfCondition: string;

  @ApiProperty({
    description: 'The remedy or management plan',
    example: 'Administer 1ml of antibiotic every 8 hours',
    required: false,
  })
  @IsString()
  @IsOptional()
  remedy?: string;

  @ApiProperty({
    description: 'Who recorded the disorder',
    enum: AdministeredByType,
    example: AdministeredByType.Veterinary,
  })
  @IsEnum(AdministeredByType)
  @IsNotEmpty()
  administeredByType: string;

  @ApiProperty({
    description: 'The name of the person who recorded the disorder',
    example: 'Dr. Smith',
    required: false,
  })
  @IsString()
  @IsOptional()
  administeredByName?: string;

  @ApiProperty({
    description: 'The practice ID if recorded by a vet',
    example: 'vet12345',
    required: false,
  })
  @IsString()
  @IsOptional()
  practiceId?: string;

  @ApiProperty({
    description: 'The technician ID if recorded by an AI technician',
    example: 'tech12345',
    required: false,
  })
  @IsString()
  @IsOptional()
  technicianId?: string;
}
