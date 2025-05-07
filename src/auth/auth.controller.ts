import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

interface AuthResponse {
  user: {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: string;
    ageGroup: string;
    residenceCounty: string;
    residenceLocation?: string;
    email?: string;
    phoneNumber: string;
    businessNumber?: string;
    yearsOfExperience?: number;
    createdAt: Date;
    updatedAt: Date;
    farm?: {
      id: string;
      name: string;
      county: string;
      administrativeLocation: string;
      size: number;
      ownership: string;
      farmingTypes: string[];
    };
  };
  token: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @ApiOperation({
    summary: 'Register a new farmer',
    description: 'Creates a new farmer account with farm details'
  })
  @ApiBody({
    type: RegisterDto,
    examples: {
      'Kenyan Farmer': {
        summary: 'Typical Kenyan farmer registration',
        value: {
          // Farm Details
          farmName: 'Kamau Mixed Farm',
          county: 'Kiambu',
          administrativeLocation: 'Kikuyu',
          farmSize: 5.5,
          ownership: 'Freehold',
          farmingTypes: ['Dairy cattle', 'Poultry', 'Crops'],

          // Personal Information
          firstName: 'Mwangi',
          middleName: 'Kamau',
          lastName: 'Kariuki',
          gender: 'Male',
          ageGroup: '35-44',
          residenceCounty: 'Kiambu',
          residenceLocation: 'Kikuyu Town',

          // Professional Information
          yearsOfExperience: 8,
          email: 'mwangi.kamau@example.com',
          phoneNumber: '+254712345678',
          businessNumber: '+254720123456',
          pin: '1234'
        }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'Farmer successfully registered',
    schema: {
      type: 'object',
      example: {
        user: {
          id: 'clh2x0f380000mk08g8hv1q2z',
          firstName: 'Mwangi',
          middleName: 'Kamau',
          lastName: 'Kariuki',
          gender: 'Male',
          ageGroup: '35-44',
          residenceCounty: 'Kiambu',
          residenceLocation: 'Kikuyu Town',
          email: 'mwangi.kamau@example.com',
          phoneNumber: '+254712345678',
          businessNumber: '+254720123456',
          yearsOfExperience: 8,
          createdAt: '2025-05-07T17:46:51.000Z',
          updatedAt: '2025-05-07T17:46:51.000Z',
          farm: {
            id: 'clh2x0f380001mk08x7v2p4m1',
            name: 'Kamau Mixed Farm',
            county: 'Kiambu',
            administrativeLocation: 'Kikuyu',
            size: 5.5,
            ownership: 'Freehold',
            farmingTypes: ['Dairy cattle', 'Poultry', 'Crops']
          }
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGgyeDBmMzgwMDAwbWswOGc4aHYxcTJ6IiwiaWF0IjoxNzA5ODM0ODExLCJleHAiOjE3MTA0Mzk2MTF9...'
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid input data' })
  @ApiResponse({ status: 409, description: 'Conflict - Phone number already registered' })
  async register(@Body() dto: RegisterDto): Promise<AuthResponse> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login to farmer account',
    description: 'Authenticate using phone number and PIN'
  })
  @ApiBody({
    type: LoginDto,
    examples: {
      'Kenyan Farmer Login': {
        summary: 'Standard Kenyan farmer login',
        value: {
          phoneNumber: '+254712345678',
          pin: '1234'
        }
      }
    }
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    schema: {
      type: 'object',
      example: {
        user: {
          id: 'clh2x0f380000mk08g8hv1q2z',
          firstName: 'Mwangi',
          middleName: 'Kamau',
          lastName: 'Kariuki',
          gender: 'Male',
          ageGroup: '35-44',
          residenceCounty: 'Kiambu',
          residenceLocation: 'Kikuyu Town',
          email: 'mwangi.kamau@example.com',
          phoneNumber: '+254712345678',
          businessNumber: '+254720123456',
          yearsOfExperience: 8,
          createdAt: '2025-05-07T17:46:51.000Z',
          updatedAt: '2025-05-07T17:46:51.000Z',
          farm: {
            id: 'clh2x0f380001mk08x7v2p4m1',
            name: 'Kamau Mixed Farm',
            county: 'Kiambu',
            administrativeLocation: 'Kikuyu',
            size: 5.5,
            ownership: 'Freehold',
            farmingTypes: ['Dairy cattle', 'Poultry', 'Crops']
          }
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGgyeDBmMzgwMDAwbWswOGc4aHYxcTJ6IiwiaWF0IjoxNzA5ODM0ODExLCJleHAiOjE3MTA0Mzk2MTF9...'
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid credentials' })
  async login(@Body() dto: LoginDto): Promise<AuthResponse> {
    return this.authService.login(dto);
  }
}
