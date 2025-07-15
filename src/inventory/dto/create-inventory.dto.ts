import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateGoodsDto } from './create-goods.dto';
import { CreateMachineryDto } from './create-machinery.dto';
import { CreateUtilityDto } from './create-utility.dto';

export class CreateInventoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  farmId: string;

  @ApiProperty({ type: CreateGoodsDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateGoodsDto)
  goodsInStock?: CreateGoodsDto;

  @ApiProperty({ type: CreateMachineryDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateMachineryDto)
  machinery?: CreateMachineryDto;

  @ApiProperty({ type: CreateUtilityDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUtilityDto)
  utility?: CreateUtilityDto;
}
