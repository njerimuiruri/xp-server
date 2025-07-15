import { PartialType } from '@nestjs/swagger';
import { CreateGeneticDisorderRecordDto } from './create-genetic-disorder-record.dto';

export class UpdateGeneticDisorderRecordDto extends PartialType(
  CreateGeneticDisorderRecordDto,
) {}
