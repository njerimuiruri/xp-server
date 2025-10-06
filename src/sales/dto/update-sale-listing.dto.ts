import { PartialType } from '@nestjs/swagger';
import { CreateSaleListingDto } from './create-sale-listing.dto';

export class UpdateSaleListingDto extends PartialType(CreateSaleListingDto) {}
