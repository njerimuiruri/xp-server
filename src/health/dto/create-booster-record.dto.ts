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

export class CreateBoosterRecordDto {
  @ApiProperty({
    description: 'The ID of the animal or flock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  animalIdOrFlockId: string;

  @ApiProperty({
    description: 'The boosters or additives given',
    example: 'Vitamin B12',
  })
  @IsString()
  @IsNotEmpty()
  boostersOrAdditives: string;

  @ApiProperty({
    description: 'The purpose of the booster',
    example: 'Growth promotion',
  })
  @IsString()
  @IsNotEmpty()
  purpose: string;

  @ApiProperty({ description: 'The quantity of booster given', example: 10.5 })
  @IsNumber()
  @IsPositive()
  quantityGiven: number;

  @ApiProperty({ description: 'The unit of the quantity', example: 'ml' })
  @IsString()
  @IsNotEmpty()
  quantityUnit: string;

  @ApiProperty({
    description: 'The date the booster was administered',
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  dateAdministered: Date;

  @ApiProperty({
    description: 'The cost of the booster',
    example: 50.25,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  costOfBooster?: number;

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
