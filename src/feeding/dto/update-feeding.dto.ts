import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateFeedingDto } from './create-feeding.dto';

export class UpdateFeedingDto extends PartialType(
  OmitType(CreateFeedingDto, ['farmId', 'userId']),
) {}
