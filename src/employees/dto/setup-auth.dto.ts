import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetupAuthDto {
  @ApiProperty({
    description: 'Employee PIN for authentication',
    example: '1234',
    minLength: 4,
    maxLength: 6,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(6)
  pin: string;
}
