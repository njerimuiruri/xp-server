import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsISO8601,
} from 'class-validator';

export class CreateTransferDto {
  @ApiProperty({
    description: 'ID of the livestock to transfer',
    example: 'cmbdvqm6c0001hj9f4qafhjbe',
  })
  @IsString()
  @IsNotEmpty()
  livestockId: string;

  @ApiProperty({
    description: 'ID of the source farm',
    example: 'cmbduehjf0003l8048w6lbxxt',
  })
  @IsString()
  @IsNotEmpty()
  fromFarmId: string;

  @ApiProperty({
    description: 'ID of the destination farm',
    example: 'cmbduehjf0003l8048w6lbxxu',
  })
  @IsString()
  @IsNotEmpty()
  toFarmId: string;

  @ApiProperty({
    description: 'Date of the transfer',
    example: '2025-06-15T10:00:00Z',
  })
  @IsISO8601()
  @IsNotEmpty()
  transferDate: string;

  @ApiProperty({
    description: 'Reason for the transfer',
    example: 'Better grazing facilities at destination farm',
    required: false,
  })
  @IsString()
  @IsOptional()
  reason?: string;

  @ApiProperty({
    description: 'Method of transport',
    example: 'Livestock transport truck',
    required: false,
  })
  @IsString()
  @IsOptional()
  transportMethod?: string;

  @ApiProperty({
    description: 'Special handling precautions',
    example: 'Pregnant animal, handle with care',
    required: false,
  })
  @IsString()
  @IsOptional()
  handlingPrecautions?: string;

  @ApiProperty({
    description: 'URLs to photos or documents related to the transfer',
    example: ['https://example.com/transfer-doc.pdf'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  attachments?: string[];
}
