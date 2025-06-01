import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export enum LivestockStatus {
  ACTIVE = 'active',
  DECEASED = 'deceased',
  SOLD = 'sold',
  TRANSFERRED = 'transferred',
}

export class UpdateLivestockStatusDto {
  @ApiProperty({
    description: 'New status of the livestock',
    example: 'deceased',
    enum: LivestockStatus,
  })
  @IsEnum(LivestockStatus)
  @IsNotEmpty()
  status: LivestockStatus;

  @ApiProperty({
    description: 'Reason for the status change',
    example: 'Animal reached end of productive life',
    required: false,
  })
  @IsString()
  @IsOptional()
  reason?: string;
}
