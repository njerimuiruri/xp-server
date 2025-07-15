import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional, IsPositive } from 'class-validator';

export class FeedDetailsDto {
  @ApiProperty({ description: 'Type of feed (e.g., Basal, Concentrate, Supplement)', example: 'Basal' })
  @IsString()
  @IsNotEmpty()
  feedType: string;

  @ApiProperty({ description: 'Source of the feed', example: 'Hay' })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({ description: 'Feeding schedule', example: 'Daily' })
  @IsString()
  @IsNotEmpty()
  schedule: string;

  @ApiProperty({ description: 'Quantity of feed in kg', example: 50 })
  @IsNumber()
  @IsPositive()
  quantity: number;

  @ApiProperty({ description: 'Date of feeding', example: '2025-07-15T00:00:00.000Z' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Cost of the feed', required: false, example: 2500 })
  @IsNumber()
  @IsOptional()
  cost?: number;

  @ApiProperty({ description: 'Supplier of the feed', required: false, example: 'FarmCo' })
  @IsString()
  @IsOptional()
  supplier?: string;
}
