import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Phone number of the user',
    example: '+254700000000'
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    description: '4-digit PIN',
    minLength: 4,
    maxLength: 4,
    example: '1234'
  })
  @IsString()
  pin: string;
}
