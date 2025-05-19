import { Prisma } from '../../../prisma/generated/prisma/client';

export type User = Prisma.UserGetPayload<{
  include: {
    farms: true;
  };
}> & {
  otp?: string | null;
  otpExpiry?: Date | null;
};

export type UserWithoutPin = Omit<User, 'pin'>;
