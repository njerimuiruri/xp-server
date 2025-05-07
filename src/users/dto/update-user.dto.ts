import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'First name of the farmer' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({ description: 'Middle name of the farmer' })
  @IsString()
  @IsOptional()
  middleName?: string;

  @ApiPropertyOptional({ description: 'Last name of the farmer' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional({ 
    enum: Gender,
    description: 'Gender of the farmer'
  })
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @ApiPropertyOptional({ 
    description: 'Age group of the farmer',
    example: '25-34'
  })
  @IsString()
  @IsOptional()
  ageGroup?: string;

  @ApiPropertyOptional({ description: 'County of residence' })
  @IsString()
  @IsOptional()
  residenceCounty?: string;

  @ApiPropertyOptional({ description: 'Specific location of residence' })
  @IsString()
  @IsOptional()
  residenceLocation?: string;

  @ApiPropertyOptional({ 
    description: 'Email address',
    example: 'farmer@example.com'
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ 
    description: 'Business contact number',
    example: '+254720123456'
  })
  @IsString()
  @IsOptional()
  businessNumber?: string;
}
