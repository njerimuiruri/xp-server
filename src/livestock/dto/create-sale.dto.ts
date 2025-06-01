import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsISO8601,
  IsNumber,
  Min,
  IsEnum,
} from 'class-validator';

export enum PaymentMethod {
  CASH = 'cash',
  BANK_TRANSFER = 'bank_transfer',
  MOBILE_MONEY = 'mobile_money',
  CHECK = 'check',
  CREDIT = 'credit',
}

export class CreateSaleDto {
  @ApiProperty({
    description: 'ID of the livestock being sold',
    example: 'cmbdvqm6c0001hj9f4qafhjbe',
  })
  @IsString()
  @IsNotEmpty()
  livestockId: string;

  @ApiProperty({
    description: 'Date of the sale',
    example: '2025-06-15T10:00:00Z',
  })
  @IsISO8601()
  @IsNotEmpty()
  saleDate: string;

  @ApiProperty({
    description: 'Name of the buyer',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  buyerName: string;

  @ApiProperty({
    description: 'Contact information of the buyer',
    example: '+254712345678',
    required: false,
  })
  @IsString()
  @IsOptional()
  buyerContact?: string;

  @ApiProperty({
    description: 'Sale amount in local currency',
    example: 50000,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  saleAmount: number;

  @ApiProperty({
    description: 'Payment method used',
    example: 'mobile_money',
    enum: PaymentMethod,
  })
  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod: PaymentMethod;

  @ApiProperty({
    description: 'Receipt or transaction number',
    example: 'RCT-2025-001',
    required: false,
  })
  @IsString()
  @IsOptional()
  receiptNumber?: string;

  @ApiProperty({
    description: 'Additional notes about the sale',
    example: 'Buyer will collect animal on June 16th',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({
    description: 'URLs to photos or documents related to the sale',
    example: ['https://example.com/receipt.pdf', 'https://example.com/sale-agreement.pdf'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  attachments?: string[];
}
