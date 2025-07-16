import { PartialType } from '@nestjs/swagger';
import { CreateAllergyRecordDto } from './create-allergy-record.dto';

export class UpdateAllergyRecordDto extends PartialType(CreateAllergyRecordDto) {}
