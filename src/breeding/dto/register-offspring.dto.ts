import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class RegisterOffspringDto {
  @ApiProperty({
    description: 'Type of livestock (e.g., dairy cow, beef cattle)',
    example: 'dairy cow',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'Breed type of the livestock',
    example: 'Friesian',
  })
  @IsString()
  @IsNotEmpty()
  breedType: string;

  @ApiPropertyOptional({
    description: 'Phenotype/physical characteristics',
    example: 'Black and white coat, medium build',
  })
  @IsString()
  @IsOptional()
  phenotype?: string;

  @ApiPropertyOptional({
    description: 'Current weight in kg',
    example: 45.5,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  currentWeight?: number;
}
