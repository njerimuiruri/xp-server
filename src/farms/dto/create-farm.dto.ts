import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateFarmDto {
  @ApiProperty({ example: 'Kamau Mixed Farm', description: 'Name of the farm' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Kiambu', description: 'County where the farm is located' })
  @IsString()
  county: string;

  @ApiProperty({ example: 'Kikuyu', description: 'Administrative location within the county' })
  @IsString()
  administrativeLocation: string;

  @ApiProperty({ example: 5.5, description: 'Size of the farm in acres' })
  @IsNumber()
  size: number;

  @ApiProperty({ example: 'Freehold', description: 'Ownership type' })
  @IsString()
  ownership: string;

  @ApiProperty({ example: ['Dairy cattle', 'Poultry', 'Crops'], description: 'Types of farming activities', type: [String] })
  @IsArray()
  @IsString({ each: true })
  farmingTypes: string[];

  @ApiProperty({ example: 'clh2x0f380000mk08g8hv1q2z', description: 'ID of the user who owns the farm' })
  @IsString()
  userId: string;
}
