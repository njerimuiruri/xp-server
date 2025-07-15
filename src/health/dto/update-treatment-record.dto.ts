import { PartialType } from '@nestjs/swagger';
import { CreateTreatmentRecordDto } from './create-treatment-record.dto';

export class UpdateTreatmentRecordDto extends PartialType(
  CreateTreatmentRecordDto,
) {}
