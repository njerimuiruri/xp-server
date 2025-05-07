import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class UpdateFarmDto {
  @ApiPropertyOptional({ description: 'Name of the farm' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'County where the farm is located' })
  @IsString()
  @IsOptional()
  county?: string;

  @ApiPropertyOptional({ description: 'Specific administrative location of the farm' })
  @IsString()
  @IsOptional()
  administrativeLocation?: string;

  @ApiPropertyOptional({ 
    description: 'Size of the farm in acres',
    example: 5.5
  })
  @IsNumber()
  @IsOptional()
  size?: number;

  @ApiPropertyOptional({ 
    description: 'Type of land ownership',
    example: 'Freehold'
  })
  @IsString()
  @IsOptional()
  ownership?: string;

  @ApiPropertyOptional({ 
    description: 'Types of farming activities',
    example: ['Dairy cattle', 'Poultry', 'Crops']
  })
  @IsArray()
  @IsOptional()
  farmingTypes?: string[];
}
