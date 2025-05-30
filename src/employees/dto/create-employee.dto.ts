import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
  IsDateString,
  IsEnum,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';

export class BenefitDto {
  @ApiProperty({ description: 'Name of the benefit', example: 'nssf' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Amount of the benefit', example: 1080, required: false })
  @IsNumber()
  @IsOptional()
  amount?: number;
}

export class CreateEmployeeDto {
  @ApiProperty({ description: 'First name of the employee', example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'Middle name of the employee', example: 'Mwangi', required: false })
  @IsString()
  @IsOptional()
  middleName?: string;

  @ApiProperty({ description: 'Last name of the employee', example: 'Kamau' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'Phone number of the employee', example: '+254712345678' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Emergency contact number', example: '+254723456789', required: false })
  @IsString()
  @IsOptional()
  emergencyContact?: string;

  @ApiProperty({ description: 'National ID number', example: '12345678' })
  @IsString()
  @IsNotEmpty()
  idNumber: string;

  @ApiProperty({ description: 'URL to ID photo', example: 'https://storage.example.com/id-photos/12345.jpg', required: false })
  @IsString()
  @IsOptional()
  idPhoto?: string;

  @ApiProperty({ description: 'Type of employee', example: 'permanent', enum: ['permanent', 'casual'] })
  @IsEnum(['permanent', 'casual'])
  @IsNotEmpty()
  employeeType: string;

  @ApiProperty({ description: 'Date of employment', example: '2025-01-15' })
  @IsDateString()
  @IsNotEmpty()
  dateOfEmployment: string;

  @ApiProperty({ description: 'End date of employment (if applicable)', example: '2025-12-31', required: false })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({ description: 'Role of the employee', example: 'milker' })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ description: 'Custom role name (if role is custom)', example: 'Farm Supervisor', required: false })
  @IsString()
  @IsOptional()
  customRole?: string;

  @ApiProperty({ description: 'Payment schedule', example: 'monthly', enum: ['daily', 'weekly', 'monthly'] })
  @IsEnum(['daily', 'weekly', 'monthly'])
  @IsNotEmpty()
  paymentSchedule: string;

  @ApiProperty({ description: 'Salary amount in KES', example: 25000 })
  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @ApiProperty({ description: 'Type of engagement (for casual employees)', example: 'fulltime', enum: ['fulltime', 'parttime', 'contract', 'seasonal', 'daily'], required: false })
  @IsEnum(['fulltime', 'parttime', 'contract', 'seasonal', 'daily'])
  @IsOptional()
  typeOfEngagement?: string;

  @ApiProperty({ description: 'Work schedule', example: 'full', enum: ['full', 'half', 'custom'], required: false })
  @IsEnum(['full', 'half', 'custom'])
  @IsOptional()
  workSchedule?: string;

  @ApiProperty({ description: 'List of benefits', type: [BenefitDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BenefitDto)
  @IsOptional()
  benefits?: BenefitDto[];

  @ApiProperty({ description: 'IDs of farms the employee is assigned to', example: ['clh2x0f380001mk08x7v2p4m1'] })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  farmIds: string[];
}
