import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsNumber,
  IsDate,
  IsBoolean,
  IsArray,
  IsPositive,
  Min,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';

enum PurposeEnum {
  IMPROVE_MILK_PRODUCTION = 'Improve Milk Production',
  STOCKING_NUMBER = 'Stocking Number',
  IMMUNITY = 'Immunity',
}

enum StrategyEnum {
  CROSS_BREEDING = 'Cross Breeding',
  BREEDING_WITHIN_BREEDS = 'Breeding Within Breeds',
  BREEDING_BETWEEN_BREEDS = 'Breeding Between Breeds',
}

enum ServiceTypeEnum {
  NATURAL_MATING = 'Natural Mating',
  ARTIFICIAL_INSEMINATION = 'Artificial Insemination',
}

enum AITypeEnum {
  SEX_CELL_SEMEN = 'Sex Cell Semen',
  REGULAR_AI = 'Regular AI',
}

enum AISourceEnum {
  LOCAL = 'Local',
  IMPORTED = 'Imported',
}

export class CreateBreedingRecordDto {
  @ApiProperty({
    description: 'ID of the female animal (dam)',
    example: 'cmbdvu9gh0001hj8n06nva367',
  })
  @IsString()
  @IsNotEmpty()
  damId: string;

  @ApiPropertyOptional({
    description: 'ID of the male animal (sire) - optional for AI',
    example: 'cmbdvu9gh0002hj8n06nva368',
  })
  @IsString()
  @IsOptional()
  sireId?: string;

  @ApiProperty({
    description: 'Farm ID where the breeding is taking place',
    example: 'cmbduehjf0003l8048w6lbxxt',
  })
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'Purpose of breeding',
    enum: PurposeEnum,
    example: PurposeEnum.IMPROVE_MILK_PRODUCTION,
  })
  @IsEnum(PurposeEnum)
  purpose: PurposeEnum;

  @ApiProperty({
    description: 'Breeding strategy',
    enum: StrategyEnum,
    example: StrategyEnum.CROSS_BREEDING,
  })
  @IsEnum(StrategyEnum)
  strategy: StrategyEnum;

  @ApiProperty({
    description: 'Service type',
    enum: ServiceTypeEnum,
    example: ServiceTypeEnum.NATURAL_MATING,
  })
  @IsEnum(ServiceTypeEnum)
  serviceType: ServiceTypeEnum;

  @ApiProperty({
    description: 'Service date',
    example: '2025-05-15T10:00:00Z',
  })
  @Type(() => Date)
  @IsDate()
  serviceDate: Date;

  @ApiProperty({
    description: 'Number of services',
    example: 1,
    default: 1,
  })
  @IsNumber()
  @IsPositive()
  @Min(1)
  @IsOptional()
  numServices?: number = 1;

  @ApiPropertyOptional({
    description: 'Date when first heat was observed',
    example: '2025-05-10T10:00:00Z',
  })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  firstHeatDate?: Date;

  // AI specific fields
  @ApiPropertyOptional({
    description: 'Sire code (for AI)',
    example: 'KE-AI-2025-001',
  })
  @IsString()
  @ValidateIf(o => o.serviceType === ServiceTypeEnum.ARTIFICIAL_INSEMINATION)
  @IsOptional()
  sireCode?: string;

  @ApiPropertyOptional({
    description: 'AI type',
    enum: AITypeEnum,
    example: AITypeEnum.REGULAR_AI,
  })
  @IsEnum(AITypeEnum)
  @ValidateIf(o => o.serviceType === ServiceTypeEnum.ARTIFICIAL_INSEMINATION)
  @IsOptional()
  aiType?: AITypeEnum;

  @ApiPropertyOptional({
    description: 'AI source',
    enum: AISourceEnum,
    example: AISourceEnum.LOCAL,
  })
  @IsEnum(AISourceEnum)
  @ValidateIf(o => o.serviceType === ServiceTypeEnum.ARTIFICIAL_INSEMINATION && o.aiType === AITypeEnum.REGULAR_AI)
  @IsOptional()
  aiSource?: AISourceEnum;

  @ApiPropertyOptional({
    description: 'AI cost in KES',
    example: 2500,
  })
  @IsNumber()
  @IsPositive()
  @ValidateIf(o => o.serviceType === ServiceTypeEnum.ARTIFICIAL_INSEMINATION)
  @IsOptional()
  aiCost?: number;

  @ApiProperty({
    description: 'Gestation period in days',
    example: 280,
  })
  @IsNumber()
  @IsPositive()
  gestationDays: number;

  @ApiProperty({
    description: 'Expected birth date',
    example: '2025-02-19T10:00:00Z',
  })
  @Type(() => Date)
  @IsDate()
  expectedBirthDate: Date;
}
