import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class RequestPasswordResetDto {
  @ApiProperty()
  @IsString()
  phoneNumber: string;
}

export class VerifyOtpDto {
  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @Length(6, 6)
  otp: string;
}

export class ResetPasswordDto {
  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @Length(6, 6)
  otp: string;

  @ApiProperty()
  newPin: string;
}
