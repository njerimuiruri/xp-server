import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { NotificationsService } from '../notifications/notifications.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { farmIds, benefits, ...employeeData } = createEmployeeDto;

    const existingEmployee = await this.prisma.employee.findUnique({
      where: { idNumber: employeeData.idNumber },
    });
    if (existingEmployee) {
      throw new BadRequestException(
        `An employee with ID Number '${employeeData.idNumber}' already exists.`,
      );
    }

    // Check if phone number already exists
    const existingPhone = await this.prisma.employee.findUnique({
      where: { phone: employeeData.phone },
    });
    if (existingPhone) {
      throw new BadRequestException(
        `An employee with phone number '${employeeData.phone}' already exists.`,
      );
    }

    // Verify that all farms exist
    for (const farmId of farmIds) {
      const farm = await this.prisma.farm.findUnique({
        where: { id: farmId },
      });

      if (!farm) {
        throw new NotFoundException(`Farm with ID ${farmId} not found`);
      }
    }

    return this.prisma.$transaction(async (prisma) => {
      // Generate automatic credentials inside transaction
      const generatedPin = this.generateEmployeePin();
      const hashedPin = await bcrypt.hash(generatedPin, 10);
      const otp = this.notificationsService.generateOTP();
      const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      const employee = await prisma.employee.create({
        data: {
          firstName: employeeData.firstName,
          middleName: employeeData.middleName,
          lastName: employeeData.lastName,
          phone: employeeData.phone,
          emergencyContact: employeeData.emergencyContact,
          idNumber: employeeData.idNumber,
          idPhoto: employeeData.idPhoto,
          employeeType: employeeData.employeeType,
          dateOfEmployment: new Date(employeeData.dateOfEmployment),
          endDate: employeeData.endDate ? new Date(employeeData.endDate) : null,
          role: employeeData.role,
          customRole: employeeData.customRole,
          paymentSchedule: employeeData.paymentSchedule,
          salary: employeeData.salary,
          typeOfEngagement: employeeData.typeOfEngagement,
          workSchedule: employeeData.workSchedule,
          // Add authentication fields
          pin: hashedPin,
          otp,
          otpExpiry,
          isVerified: false,
          // Create farm connections
          farms: {
            create: farmIds.map((farmId) => ({
              farm: { connect: { id: farmId } },
            })),
          },
          // Create benefits if provided
          benefits:
            benefits && benefits.length > 0
              ? {
                  create: benefits.map((benefit) => ({
                    name: benefit.name,
                    amount: benefit.amount,
                  })),
                }
              : undefined,
        },
        include: {
          farms: {
            include: {
              farm: true,
            },
          },
          benefits: true,
        },
      });

      // Send credentials via SMS
      const fullName = `${employee.firstName} ${employee.lastName}`;
      const smsMessage = `Welcome to XpertFarmer, ${fullName}! Your login credentials:
Phone: ${employee.phone}
PIN: ${generatedPin}
`;

      const smsSuccess = await this.notificationsService.sendSMS(
        employee.phone,
        smsMessage,
      );

      if (!smsSuccess) {
        // If SMS fails, still return the employee but log the issue
        console.error(
          `Failed to send credentials SMS to employee ${employee.id}`,
        );
        // You might want to throw an error here or handle it differently
        throw new BadRequestException(
          'Employee created but failed to send credentials via SMS',
        );
      }

      // Remove sensitive data from response
      const {
        pin,
        otp: employeeOtp,
        otpExpiry: employeeOtpExpiry,
        ...employeeResponse
      } = employee;
      return employeeResponse;
    });
  }

  async findAll(page = 1, limit = 10, search?: string, farmId?: string) {
    page = Number(page) > 0 ? Number(page) : 1;
    limit = Number(limit) > 0 ? Number(limit) : 10;
    const skip = (page - 1) * limit;

    let where: any = {};

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' as const } },
        { lastName: { contains: search, mode: 'insensitive' as const } },
        { idNumber: { contains: search, mode: 'insensitive' as const } },
        { role: { contains: search, mode: 'insensitive' as const } },
      ];
    }

    if (farmId) {
      where.farms = {
        some: {
          farmId: farmId,
        },
      };
    }

    const [employees, total] = await Promise.all([
      this.prisma.employee.findMany({
        skip,
        take: limit,
        where,
        include: {
          farms: {
            include: {
              farm: {
                select: {
                  id: true,
                  name: true,
                  county: true,
                  administrativeLocation: true,
                },
              },
            },
          },
          benefits: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.employee.count({ where }),
    ]);

    const pages = Math.ceil(total / limit);

    return {
      data: employees,
      meta: {
        total,
        page,
        pages,
        hasNextPage: page < pages,
        hasPrevPage: page > 1,
      },
    };
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        farms: {
          include: {
            farm: {
              select: {
                id: true,
                name: true,
                county: true,
                administrativeLocation: true,
              },
            },
          },
        },
        benefits: true,
      },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const { farmIds, benefits, ...employeeData } = updateEmployeeDto;

    // Check if employee exists
    const existingEmployee = await this.prisma.employee.findUnique({
      where: { id },
      include: {
        farms: true,
        benefits: true,
      },
    });

    if (!existingEmployee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    // If farmIds are provided, verify that all farms exist
    if (farmIds) {
      for (const farmId of farmIds) {
        const farm = await this.prisma.farm.findUnique({
          where: { id: farmId },
        });

        if (!farm) {
          throw new NotFoundException(`Farm with ID ${farmId} not found`);
        }
      }
    }

    // Update the employee with transaction to ensure all related data is updated
    return this.prisma.$transaction(async (prisma) => {
      // Prepare data for update
      const updateData: any = { ...employeeData };

      // Convert date strings to Date objects if provided
      if (updateData.dateOfEmployment) {
        updateData.dateOfEmployment = new Date(updateData.dateOfEmployment);
      }

      if (updateData.endDate) {
        updateData.endDate = new Date(updateData.endDate);
      }

      // Update the employee
      const employee = await prisma.employee.update({
        where: { id },
        data: updateData,
      });

      // Update farm connections if provided
      if (farmIds) {
        // Delete existing connections
        await prisma.employeeFarm.deleteMany({
          where: { employeeId: id },
        });

        // Create new connections
        await prisma.employeeFarm.createMany({
          data: farmIds.map((farmId) => ({
            employeeId: id,
            farmId,
          })),
        });
      }

      // Update benefits if provided
      if (benefits) {
        // Delete existing benefits
        await prisma.employeeBenefit.deleteMany({
          where: { employeeId: id },
        });

        // Create new benefits
        if (benefits.length > 0) {
          await prisma.employeeBenefit.createMany({
            data: benefits.map((benefit) => ({
              employeeId: id,
              name: benefit.name,
              amount: benefit.amount,
            })),
          });
        }
      }

      // Return the updated employee with all relationships
      return prisma.employee.findUnique({
        where: { id },
        include: {
          farms: {
            include: {
              farm: {
                select: {
                  id: true,
                  name: true,
                  county: true,
                  administrativeLocation: true,
                },
              },
            },
          },
          benefits: true,
        },
      });
    });
  }

  async remove(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    await this.prisma.employee.delete({
      where: { id },
    });

    return { message: 'Employee deleted successfully' };
  }

  private generateEmployeePin(): string {
    // Generate a 4-digit PIN
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
}
