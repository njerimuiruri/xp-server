import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsPositive,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateVaccinationRecordDto {
  @ApiProperty({
    description: 'The ID of the animal or flock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  animalIdOrFlockId: string;

  @ApiProperty({
    description: 'The disease being vaccinated against',
    example: 'Newcastle Disease',
  })
  @IsString()
  @IsNotEmpty()
  vaccinationAgainst: string;

  @ApiProperty({ description: 'The drug administered', example: 'Lasota' })
  @IsString()
  @IsNotEmpty()
  drugAdministered: string;

  @ApiProperty({
    description: 'The date of administration',
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  dateAdministered: Date;

  @ApiProperty({ description: 'The dosage given', example: 0.5 })
  @IsNumber()
  @IsPositive()
  dosage: number;

  @ApiProperty({
    description: 'The cost of the vaccine',
    example: 25.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  costOfVaccine?: number;

  @ApiProperty({
    description: 'Who administered the vaccine',
    example: 'Dr. Smith',
    required: false,
  })
  @IsString()
  @IsOptional()
  administeredBy?: string;

  @ApiProperty({
    description: 'The practice ID of the administrator',
    example: 'VET12345',
    required: false,
  })
  @IsString()
  @IsOptional()
  practiceId?: string;

  @ApiProperty({
    description: 'The cost of the service',
    example: 100.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  costOfService?: number;

  @ApiProperty({
    description: 'The ID of the farm',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsUUID()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'The ID of the livestock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsUUID()
  @IsNotEmpty()
  livestockId: string;
}
