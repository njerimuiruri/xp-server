import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsNumber,
  IsDate,
  IsBoolean,
  IsArray,
  IsPositive,
  Min,
  ValidateIf,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

enum DeliveryMethodEnum {
  NATURAL_BIRTH = 'Natural Birth',
  ASSISTED = 'Assisted',
  CESAREAN = 'Cesarean',
}

enum OffspringSexEnum {
  MALE = 'Male',
  FEMALE = 'Female',
}

class OffspringDto {
  @ApiProperty({
    description: 'ID/tag number assigned to the offspring',
    example: 'CALF-2025-001',
  })
  @IsString()
  @IsNotEmpty()
  offspringId: string;

  @ApiProperty({
    description: 'Sex of the offspring',
    enum: OffspringSexEnum,
    example: OffspringSexEnum.FEMALE,
  })
  @IsEnum(OffspringSexEnum)
  sex: OffspringSexEnum;

  @ApiPropertyOptional({
    description: 'Birth weight in kg',
    example: 35.5,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  birthWeight?: number;

  @ApiPropertyOptional({
    description: 'Additional notes about the offspring',
    example: 'Healthy calf with good vitals',
  })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class RecordBirthDto {
  @ApiProperty({
    description: 'Date of birth',
    example: '2025-02-19T10:00:00Z',
  })
  @Type(() => Date)
  @IsDate()
  birthDate: Date;

  @ApiProperty({
    description: 'Delivery method',
    enum: DeliveryMethodEnum,
    example: DeliveryMethodEnum.NATURAL_BIRTH,
  })
  @IsEnum(DeliveryMethodEnum)
  deliveryMethod: DeliveryMethodEnum;

  @ApiProperty({
    description: 'Number of offspring born',
    example: 1,
  })
  @IsNumber()
  @IsPositive()
  youngOnes: number;

  @ApiPropertyOptional({
    description: 'Birth weight for single births (in kg)',
    example: 35.5,
  })
  @IsNumber()
  @IsPositive()
  @ValidateIf(o => o.youngOnes === 1)
  @IsOptional()
  birthWeight?: number;

  @ApiPropertyOptional({
    description: 'Litter weight for multiple births (in kg)',
    example: 15.2,
  })
  @IsNumber()
  @IsPositive()
  @ValidateIf(o => o.youngOnes > 1)
  @IsOptional()
  litterWeight?: number;

  @ApiPropertyOptional({
    description: 'Description of offspring sex distribution',
    example: '2 males, 1 female',
  })
  @IsString()
  @IsOptional()
  offspringSex?: string;

  @ApiProperty({
    description: 'Details of each offspring',
    type: [OffspringDto],
  })
  @ValidateNested({ each: true })
  @Type(() => OffspringDto)
  @IsArray()
  @ArrayMinSize(1)
  offspring: OffspringDto[];
}
