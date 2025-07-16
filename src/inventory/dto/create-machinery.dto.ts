import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateMachineryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  equipmentName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  equipmentId?: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  purchaseDate: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currentLocation: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  condition: string;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  lastServiceDate?: Date;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  nextServiceDate?: Date;
}
