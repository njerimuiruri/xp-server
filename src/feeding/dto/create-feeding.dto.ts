import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsDateString, IsNumber, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class FeedDetailsDto {
  @ApiProperty({ example: 'Hay' })
  @IsString()
  @IsNotEmpty()
  feedType: string;

  @ApiProperty({ example: 'Personally Grown' })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({ example: 'Daily' })
  @IsString()
  @IsNotEmpty()
  schedule: string;

  @ApiProperty({ example: 50 })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ example: '2025-07-11T00:00:00.000Z' })
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @ApiPropertyOptional({ example: 2000 })
  @IsNumber()
  @IsOptional()
  cost?: number;

  @ApiPropertyOptional({ example: 'Local Co-op' })
  @IsString()
  @IsOptional()
  supplier?: string;
}

export class CreateFeedingDto {
  @ApiProperty({ enum: ['Single Animal', 'Group'], example: 'Single Animal' })
  @IsEnum(['Single Animal', 'Group'])
  @IsNotEmpty()
  programType: string;

  @ApiPropertyOptional({ description: 'Required if programType is Single Animal', example: 'animal_id_123' })
  @IsString()
  @IsOptional()
  animalId?: string;

  @ApiPropertyOptional({ description: 'Required if programType is Single Animal', example: 'Dairy' })
  @IsString()
  @IsOptional()
  animalType?: string;

  @ApiPropertyOptional({ type: [String], description: 'Required if programType is Single Animal', example: ['Lactating cows'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  lifecycleStages?: string[];

  @ApiPropertyOptional({ description: 'Required if programType is Group', example: 'group_id_abc' })
  @IsString()
  @IsOptional()
  groupId?: string;

  @ApiPropertyOptional({ description: 'Required if programType is Group', example: 'Poultry' })
  @IsString()
  @IsOptional()
  groupType?: string;

  @ApiPropertyOptional({ type: [String], description: 'Required if programType is Group', example: ['Grower', 'Finisher'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  groupLifecycleStages?: string[];

  @ApiProperty({ enum: ['Basal Feeds', 'Basal Feed + Concentrates + Supplements'], example: 'Basal Feed + Concentrates + Supplements' })
  @IsEnum(['Basal Feeds', 'Basal Feed + Concentrates + Supplements'])
  @IsNotEmpty()
  feedType: string;

  @ApiProperty({
    type: [FeedDetailsDto],
    example: [
      {
        feedType: 'Basal',
        source: 'Hay',
        schedule: 'Daily',
        quantity: 50,
        date: '2025-07-15T00:00:00.000Z',
        cost: 2500,
        supplier: 'FarmCo',
      },
      {
        feedType: 'Concentrate',
        source: 'Grain Mix',
        schedule: 'Daily',
        quantity: 10,
        date: '2025-07-15T00:00:00.000Z',
        cost: 1000,
        supplier: 'FarmCo',
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeedDetailsDto)
  feedDetails: FeedDetailsDto[];

  @ApiProperty({ type: [String], example: ['Morning', 'Evening'] })
  @IsArray()
  @IsString({ each: true })
  timeOfDay: string[];

  @ApiPropertyOptional({ example: 'Ensure fresh water is always available.' })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({ description: 'ID of the farm this feeding program belongs to' })
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({ description: 'ID of the user creating this program' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
