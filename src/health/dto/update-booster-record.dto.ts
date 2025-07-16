import { PartialType } from '@nestjs/swagger';
import { CreateBoosterRecordDto } from './create-booster-record.dto';

export class UpdateBoosterRecordDto extends PartialType(
  CreateBoosterRecordDto,
) {}
