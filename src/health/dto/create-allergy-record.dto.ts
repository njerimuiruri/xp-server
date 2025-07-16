import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

export class CreateAllergyRecordDto {
  @ApiProperty({
    description: 'The ID of the animal or flock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsString()
  @IsNotEmpty()
  animalIdOrFlockId: string;

  @ApiProperty({
    description: 'The date the allergy was recorded',
    example: '2025-07-15T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  dateRecorded: Date;

  @ApiProperty({
    description: 'The cause of the allergy',
    example: 'Pollen',
  })
  @IsString()
  @IsNotEmpty()
  cause: string;

  @ApiProperty({
    description: 'The remedy applied for the allergy',
    example: 'Antihistamines',
  })
  @IsString()
  @IsNotEmpty()
  remedy: string;

  @ApiProperty({
    description: 'The ID of the farm',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsUUID()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({
    description: 'The ID of the livestock',
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
  })
  @IsUUID()
  @IsNotEmpty()
  livestockId: string;
}
