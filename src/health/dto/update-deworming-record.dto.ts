import { PartialType } from '@nestjs/swagger';
import { CreateDewormingRecordDto } from './create-deworming-record.dto';

export class UpdateDewormingRecordDto extends PartialType(
  CreateDewormingRecordDto,
) {}
