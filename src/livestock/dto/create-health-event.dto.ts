import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsISO8601,
  IsNumber,
  IsEnum,
  Min,
} from 'class-validator';

export enum HealthEventType {
  VACCINATION = 'vaccination',
  TREATMENT = 'treatment',
  CHECKUP = 'check-up',
  DEWORMING = 'deworming',
  INJURY = 'injury',
  DISEASE = 'disease',
  OTHER = 'other',
}

export class CreateHealthEventDto {
  @ApiProperty({
    description: 'ID of the livestock',
    example: 'cmbdvqm6c0001hj9f4qafhjbe',
  })
  @IsString()
  @IsNotEmpty()
  livestockId: string;

  @ApiProperty({
    description: 'Type of health event',
    example: 'vaccination',
    enum: HealthEventType,
  })
  @IsEnum(HealthEventType)
  @IsNotEmpty()
  eventType: HealthEventType;

  @ApiProperty({
    description: 'Date of the health event',
    example: '2025-05-30T10:00:00Z',
  })
  @IsISO8601()
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'Description of the health event',
    example: 'Routine vaccination against foot and mouth disease',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Person who performed the health event',
    example: 'Dr. Jane Smith (Veterinarian)',
    required: false,
  })
  @IsString()
  @IsOptional()
  performedBy?: string;

  @ApiProperty({
    description: 'Medications administered',
    example: ['Antibiotic XYZ', 'Pain reliever ABC'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  medications?: string[];

  @ApiProperty({
    description: 'Dosage information',
    example: '10ml per animal',
    required: false,
  })
  @IsString()
  @IsOptional()
  dosage?: string;

  @ApiProperty({
    description: 'Cost of the health event in local currency',
    example: 2500,
    required: false,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cost?: number;

  @ApiProperty({
    description: 'Date of next scheduled health event',
    example: '2025-08-30T10:00:00Z',
    required: false,
  })
  @IsISO8601()
  @IsOptional()
  nextScheduled?: string;

  @ApiProperty({
    description: 'URLs to photos or documents related to the health event',
    example: ['https://example.com/photo1.jpg', 'https://example.com/document.pdf'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  attachments?: string[];
}
