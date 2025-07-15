import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsNumber, IsNotEmpty, IsEnum } from 'class-validator';

enum UtilityType {
  WATER = 'water',
  POWER = 'power',
  FACILITY = 'facility',
}

export class CreateUtilityDto {
  @ApiProperty({ enum: UtilityType })
  @IsEnum(UtilityType)
  @IsNotEmpty()
  utilityType: UtilityType;

  // Water Supply fields
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  waterLevel?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  waterSource?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  waterStorage?: number;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  entryDate?: Date;

  // Power Supply fields
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  powerSource?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  powerCapacity?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  installationCost?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  consumptionRate?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  consumptionCost?: number;

  // Facility fields
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  structureType?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  structureCapacity?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  constructionCost?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  facilityCondition?: string;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  lastMaintenanceDate?: Date;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  maintenanceCost?: number;
}
