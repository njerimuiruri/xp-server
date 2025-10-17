import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsArray,
  IsDateString,
  IsBoolean,
  Min,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum LivestockCategory {
  DAIRY_CATTLE = 'dairyCattle',
  BEEF_CATTLE = 'beefCattle',
  DAIRY_GOATS = 'dairyGoats',
  MEAT_GOATS = 'meatGoats',
  SHEEP = 'sheep',
  SWINE = 'swine',
  POULTRY = 'poultry',
  RABBITS = 'rabbits',
}

export enum PaymentMethod {
  MOBILE_MONEY = 'mobile_money',
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
  CHEQUE = 'cheque',
  CREDIT = 'credit',
}

export enum SaleStatus {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  SOLD = 'sold',
}

export enum HealthStatus {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  FAIR = 'fair',
  POOR = 'poor',
}

export class CreateSaleListingDto {
  @ApiProperty({
    description: 'Farm ID where the livestock is located',
    example: 'cmbduehjf0003l8048w6lbxxt',
  })
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'Name or identifier for the sale listing',
    example: 'Holstein Friesian #A234',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    enum: LivestockCategory,
    description: 'Category of livestock being sold',
    example: LivestockCategory.DAIRY_CATTLE,
  })
  @IsEnum(LivestockCategory)
  category: LivestockCategory;

  @ApiProperty({
    description: 'Breed of the livestock',
    example: 'Holstein Friesian',
  })
  @IsString()
  @IsNotEmpty()
  breed: string;

  @ApiProperty({
    description: 'Age of the livestock',
    example: '3 years',
  })
  @IsString()
  @IsNotEmpty()
  age: string;

  @ApiProperty({
    description: 'Weight in kilograms',
    example: 650,
  })
  @IsNumber()
  @Min(0)
  weight: number;

  @ApiProperty({
    description: 'Total price for the livestock',
    example: 85000,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    enum: SaleStatus,
    description: 'Current status of the sale',
    example: SaleStatus.AVAILABLE,
    default: SaleStatus.AVAILABLE,
  })
  @IsEnum(SaleStatus)
  @IsOptional()
  status?: SaleStatus = SaleStatus.AVAILABLE;

  @ApiProperty({
    enum: HealthStatus,
    description: 'Health condition of the livestock',
    example: HealthStatus.EXCELLENT,
  })
  @IsEnum(HealthStatus)
  health: HealthStatus;

  @ApiPropertyOptional({
    description: 'Date of last health checkup',
    example: '2025-09-15',
  })
  @IsDateString()
  @IsOptional()
  lastCheckup?: string;

  @ApiPropertyOptional({
    description: 'Purpose of the livestock (for cattle/goats)',
    example: 'Milk Production',
  })
  @IsString()
  @IsOptional()
  purpose?: string;

  @ApiPropertyOptional({
    description: 'Feeding program details',
    example: 'Intensive Feeding',
  })
  @IsString()
  @IsOptional()
  feedingProgram?: string;

  // Dairy cattle specific fields
  @ApiPropertyOptional({
    description: 'Milk production per day (for dairy cattle)',
    example: '25 L/day',
  })
  @IsString()
  @IsOptional()
  milkProduction?: string;

  @ApiPropertyOptional({
    description: 'Pregnancy status (for cattle)',
    example: 'Not Pregnant',
  })
  @IsString()
  @IsOptional()
  pregnancyStatus?: string;

  // Poultry specific fields
  @ApiPropertyOptional({
    description: 'Quantity of birds (for poultry)',
    example: 50,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  quantity?: number;

  @ApiPropertyOptional({
    description: 'Price per bird (for poultry)',
    example: 500,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  pricePerBird?: number;

  @ApiPropertyOptional({
    description: 'Egg production rate (for layers)',
    example: '85%',
  })
  @IsString()
  @IsOptional()
  eggProductionRate?: string;

  // Sheep/Goat specific fields
  @ApiPropertyOptional({
    description: 'Wool yield (for sheep)',
    example: '5.5 kg/year',
  })
  @IsString()
  @IsOptional()
  woolYield?: string;

  @ApiPropertyOptional({
    description: 'Milk production rate (for dairy goats)',
    example: '3.5 L/day',
  })
  @IsString()
  @IsOptional()
  milkProductionRate?: string;

  @ApiPropertyOptional({
    description: 'Additional notes about the livestock',
    example: 'Excellent breeding stock with good genetics',
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiPropertyOptional({
    description: 'Array of image URLs',
    example: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
}
