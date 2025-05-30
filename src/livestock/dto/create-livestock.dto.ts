import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsDate,
  ValidateNested,
  IsNotEmpty,
  Min,
  IsISO8601,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMammalDto {
  @ApiProperty({ description: 'Unique ID number for the animal', example: 'KE-DAIRY-001' })
  @IsString()
  @IsNotEmpty()
  idNumber: string;

  @ApiProperty({ description: 'Breed type of the animal', example: 'Holstein' })
  @IsString()
  @IsNotEmpty()
  breedType: string;

  @ApiProperty({ description: 'Physical appearance of the animal', example: 'Black and White', required: false })
  @IsString()
  @IsOptional()
  phenotype?: string;

  @ApiProperty({ description: 'Date of birth', example: '2023-05-15' })
  @IsISO8601()
  @IsNotEmpty()
  dateOfBirth: string;

  @ApiProperty({ description: 'Gender of the animal', example: 'Female', enum: ['Male', 'Female'] })
  @IsEnum(['Male', 'Female'])
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ description: 'ID of the sire (father)', example: 'SIRE-001', required: false })
  @IsString()
  @IsOptional()
  sireId?: string;

  @ApiProperty({ description: 'Code of the sire (father)', example: 'S001', required: false })
  @IsString()
  @IsOptional()
  sireCode?: string;

  @ApiProperty({ description: 'ID of the dam (mother)', example: 'DAM-001', required: false })
  @IsString()
  @IsOptional()
  damId?: string;

  @ApiProperty({ description: 'Code of the dam (mother)', example: 'D001', required: false })
  @IsString()
  @IsOptional()
  damCode?: string;

  @ApiProperty({ description: 'Weight at birth in kg', example: 35.5, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  birthWeight?: number;
}

export class CreatePoultryDto {
  @ApiProperty({ description: 'Unique ID for the flock', example: 'FLOCK-2025-001' })
  @IsString()
  @IsNotEmpty()
  flockId: string;

  @ApiProperty({ description: 'Date when birds were stocked', example: '2025-01-15' })
  @IsISO8601()
  @IsNotEmpty()
  dateOfStocking: string;

  @ApiProperty({ description: 'Gender of the birds', example: 'Mixed', enum: ['Male', 'Female', 'Mixed'] })
  @IsEnum(['Male', 'Female', 'Mixed'])
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ description: 'Initial number of birds', example: 500 })
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  initialQuantity: number;

  @ApiProperty({ description: 'Current number of birds (defaults to initial quantity)', example: 500 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  currentQuantity?: number;

  @ApiProperty({ description: 'Breed type of the birds', example: 'Broiler' })
  @IsString()
  @IsNotEmpty()
  breedType: string;

  @ApiProperty({ description: 'Source or supplier of the birds', example: 'Kenchic Ltd', required: false })
  @IsString()
  @IsOptional()
  sourceOfBirds?: string;

  @ApiProperty({ description: 'Initial average weight in grams', example: 45.5, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  initialAverageWeight?: number;
}

export class CreateLivestockDto {
  @ApiProperty({ description: 'ID of the farm where livestock is kept', example: 'clh2x0f380001mk08x7v2p4m1' })
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'Type of livestock',
    example: 'dairyCattle',
    enum: ['dairyCattle', 'beefCattle', 'dairyGoats', 'meatGoats', 'sheep', 'rabbit', 'swine', 'poultry'],
  })
  @IsEnum(['dairyCattle', 'beefCattle', 'dairyGoats', 'meatGoats', 'sheep', 'rabbit', 'swine', 'poultry'])
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'Category of livestock',
    example: 'mammal',
    enum: ['mammal', 'poultry'],
  })
  @IsEnum(['mammal', 'poultry'])
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'Details for mammal livestock (cattle, goats, sheep, etc.)',
    type: CreateMammalDto,
    required: false,
  })
  @ValidateNested()
  @Type(() => CreateMammalDto)
  @IsOptional()
  mammal?: CreateMammalDto;

  @ApiProperty({
    description: 'Details for poultry livestock',
    type: CreatePoultryDto,
    required: false,
  })
  @ValidateNested()
  @Type(() => CreatePoultryDto)
  @IsOptional()
  poultry?: CreatePoultryDto;
}
