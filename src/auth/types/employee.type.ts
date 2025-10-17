import { Prisma } from '../../../prisma/generated/prisma/client';

export type Employee = Prisma.EmployeeGetPayload<{
  include: {
    farms: {
      include: {
        farm: true;
      };
    };
    benefits: true;
  };
}> & {
  otp?: string | null;
  otpExpiry?: Date | null;
};

export type EmployeeWithoutPin = Omit<Employee, 'pin'>;
