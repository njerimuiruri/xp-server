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

  @ApiProperty({ type: FeedDetailsDto })
  @ValidateNested()
  @Type(() => FeedDetailsDto)
  basal: FeedDetailsDto;

  @ApiPropertyOptional({ type: FeedDetailsDto })
  @ValidateNested()
  @Type(() => FeedDetailsDto)
  @IsOptional()
  concentrate?: FeedDetailsDto;

  @ApiPropertyOptional({ type: FeedDetailsDto })
  @ValidateNested()
  @Type(() => FeedDetailsDto)
  @IsOptional()
  supplement?: FeedDetailsDto;

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
