import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async register(dto: RegisterDto) {
    // Check for existing phone number
    const existingPhone = await this.prisma.user.findUnique({
      where: { phoneNumber: dto.phoneNumber },
    });

    if (existingPhone) {
      throw new UnauthorizedException('Phone number already registered');
    }

    // Check for existing email if provided
    if (dto.email) {
      const existingEmail = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingEmail) {
        throw new UnauthorizedException('Email already registered');
      }
    }

    const hashedPin = await bcrypt.hash(dto.pin, 10);

    // Create user with validated data
    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        middleName: dto.middleName,
        lastName: dto.lastName,
        gender: dto.gender,
        ageGroup: dto.ageGroup,
        residenceCounty: dto.residenceCounty,
        residenceLocation: dto.residenceLocation,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        businessNumber: dto.businessNumber,
        pin: hashedPin,
        yearsOfExperience: dto.yearsOfExperience,
        farm: {
          create: {
            name: dto.farmName,
            county: dto.county,
            administrativeLocation: dto.administrativeLocation,
            size: dto.farmSize,
            ownership: dto.ownership,
            farmingTypes: dto.farmingTypes,
          },
        },
      },
      include: {
        farm: true,
      },
    });

    const { pin, ...result } = user;
    return {
      user: result,
      token: await this.generateToken(user.id),
    };
  }

  async login(dto: LoginDto) {
    // Validate login credentials
    const user = await this.prisma.user.findUnique({
      where: { phoneNumber: dto.phoneNumber },
      include: {
        farm: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValidPin = await bcrypt.compare(dto.pin, user.pin);
    if (!isValidPin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { pin, ...result } = user;
    return {
      user: result,
      token: await this.generateToken(user.id),
    };
  }

  private async generateToken(userId: string): Promise<string> {
    return this.jwtService.signAsync({ sub: userId });
  }
}
