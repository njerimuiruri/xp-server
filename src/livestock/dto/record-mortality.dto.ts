import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsISO8601,
} from 'class-validator';

export class RecordMortalityDto {
  @ApiProperty({
    description: 'ID of the livestock that has deceased',
    example: 'cmbdvqm6c0001hj9f4qafhjbe',
  })
  @IsString()
  @IsNotEmpty()
  livestockId: string;

  @ApiProperty({
    description: 'Date of mortality',
    example: '2025-05-30T10:00:00Z',
  })
  @IsISO8601()
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'Cause of mortality',
    example: 'Disease',
    enum: ['Disease', 'Accident', 'Age', 'Predator', 'Unknown', 'Other'],
  })
  @IsString()
  @IsNotEmpty()
  cause: string;

  @ApiProperty({
    description: 'Detailed description of the mortality event',
    example: 'Animal showed symptoms of respiratory distress for 2 days before passing',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Person who reported the mortality',
    example: 'John Doe (Farm Manager)',
    required: false,
  })
  @IsString()
  @IsOptional()
  reportedBy?: string;

  @ApiProperty({
    description: 'URLs to photos or documents related to the mortality',
    example: ['https://example.com/photo1.jpg', 'https://example.com/document.pdf'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  attachments?: string[];
}
