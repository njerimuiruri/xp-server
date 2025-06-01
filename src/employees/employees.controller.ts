import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('employees')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new employee',
    description: 'Add a new employee to the system. Can be assigned to one or more farms.'
  })
  @ApiBody({
    type: CreateEmployeeDto,
    examples: {
      permanentEmployee: {
        summary: 'Permanent Employee Example',
        value: {
          firstName: 'John',
          middleName: 'Mwangi',
          lastName: 'Kamau',
          phone: '+254712345678',
          emergencyContact: '+254723456789',
          idNumber: '12345678',
          employeeType: 'permanent',
          dateOfEmployment: '2025-01-15',
          role: 'milker',
          paymentSchedule: 'monthly',
          salary: 25000,
          benefits: [
            { name: 'nssf', amount: 1080 },
            { name: 'nhif', amount: 1400 },
            { name: 'housingLevy', amount: 375 }
          ],
          farmIds: ['clh2x0f380001mk08x7v2p4m1']
        },
      },
      casualEmployee: {
        summary: 'Casual Employee Example',
        value: {
          firstName: 'Jane',
          lastName: 'Wanjiru',
          phone: '+254712345679',
          idNumber: '87654321',
          employeeType: 'casual',
          dateOfEmployment: '2025-05-20',
          endDate: '2025-06-20',
          role: 'cleaner',
          paymentSchedule: 'daily',
          salary: 800,
          typeOfEngagement: 'seasonal',
          workSchedule: 'full',
          farmIds: ['clh2x0f380001mk08x7v2p4m1']
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully created employee',
    schema: {
      type: 'object',
      example: {
        id: 'cmaerl8s10000l004pmlo1f7d',
        firstName: 'John',
        middleName: 'Mwangi',
        lastName: 'Kamau',
        phone: '+254712345678',
        emergencyContact: '+254723456789',
        idNumber: '12345678',
        idPhoto: null,
        employeeType: 'permanent',
        dateOfEmployment: '2025-01-15T00:00:00.000Z',
        endDate: null,
        role: 'milker',
        customRole: null,
        paymentSchedule: 'monthly',
        salary: 25000,
        typeOfEngagement: null,
        workSchedule: null,
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:00:00.000Z',
        farms: [
          {
            id: 'cmaerl8s10000l004pmlo1f7e',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            farmId: 'clh2x0f380001mk08x7v2p4m1',
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z',
            farm: {
              id: 'clh2x0f380001mk08x7v2p4m1',
              name: 'Kamau Mixed Farm',
              county: 'Kiambu',
              administrativeLocation: 'Kikuyu'
            }
          }
        ],
        benefits: [
          {
            id: 'cmaerl8s10000l004pmlo1f7f',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'nssf',
            amount: 1080,
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z'
          },
          {
            id: 'cmaerl8s10000l004pmlo1f7g',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'nhif',
            amount: 1400,
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z'
          },
          {
            id: 'cmaerl8s10000l004pmlo1f7h',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'housingLevy',
            amount: 375,
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z'
          }
        ]
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Validation Error' })
  @ApiResponse({ status: 404, description: 'Farm not found' })
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all employees',
    description: 'Retrieve a paginated list of all employees with optional search and farm filtering'
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Search term for employee name, ID number, or role' })
  @ApiQuery({ name: 'farmId', required: false, type: String, description: 'Filter employees by farm ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved employees',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            example: {
              id: 'cmaerl8s10000l004pmlo1f7d',
              firstName: 'John',
              middleName: 'Mwangi',
              lastName: 'Kamau',
              phone: '+254712345678',
              emergencyContact: '+254723456789',
              idNumber: '12345678',
              idPhoto: null,
              employeeType: 'permanent',
              dateOfEmployment: '2025-01-15T00:00:00.000Z',
              endDate: null,
              role: 'milker',
              customRole: null,
              paymentSchedule: 'monthly',
              salary: 25000,
              typeOfEngagement: null,
              workSchedule: null,
              createdAt: '2025-05-30T16:00:00.000Z',
              updatedAt: '2025-05-30T16:00:00.000Z',
              farms: [
                {
                  id: 'cmaerl8s10000l004pmlo1f7e',
                  employeeId: 'cmaerl8s10000l004pmlo1f7d',
                  farmId: 'clh2x0f380001mk08x7v2p4m1',
                  createdAt: '2025-05-30T16:00:00.000Z',
                  updatedAt: '2025-05-30T16:00:00.000Z',
                  farm: {
                    id: 'clh2x0f380001mk08x7v2p4m1',
                    name: 'Kamau Mixed Farm',
                    county: 'Kiambu',
                    administrativeLocation: 'Kikuyu'
                  }
                }
              ],
              benefits: [
                {
                  id: 'cmaerl8s10000l004pmlo1f7f',
                  employeeId: 'cmaerl8s10000l004pmlo1f7d',
                  name: 'nssf',
                  amount: 1080,
                  createdAt: '2025-05-30T16:00:00.000Z',
                  updatedAt: '2025-05-30T16:00:00.000Z'
                }
              ]
            }
          }
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'number', example: 100 },
            page: { type: 'number', example: 1 },
            pages: { type: 'number', example: 10 },
            hasNextPage: { type: 'boolean', example: true },
            hasPrevPage: { type: 'boolean', example: false }
          }
        }
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('farmId') farmId?: string,
  ) {
    return this.employeesService.findAll(page, limit, search, farmId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get employee by ID',
    description: 'Retrieve a specific employee by their ID'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved employee',
    schema: {
      type: 'object',
      example: {
        id: 'cmaerl8s10000l004pmlo1f7d',
        firstName: 'John',
        middleName: 'Mwangi',
        lastName: 'Kamau',
        phone: '+254712345678',
        emergencyContact: '+254723456789',
        idNumber: '12345678',
        idPhoto: null,
        employeeType: 'permanent',
        dateOfEmployment: '2025-01-15T00:00:00.000Z',
        endDate: null,
        role: 'milker',
        customRole: null,
        paymentSchedule: 'monthly',
        salary: 25000,
        typeOfEngagement: null,
        workSchedule: null,
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:00:00.000Z',
        farms: [
          {
            id: 'cmaerl8s10000l004pmlo1f7e',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            farmId: 'clh2x0f380001mk08x7v2p4m1',
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z',
            farm: {
              id: 'clh2x0f380001mk08x7v2p4m1',
              name: 'Kamau Mixed Farm',
              county: 'Kiambu',
              administrativeLocation: 'Kikuyu'
            }
          }
        ],
        benefits: [
          {
            id: 'cmaerl8s10000l004pmlo1f7f',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'nssf',
            amount: 1080,
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z'
          }
        ]
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update employee',
    description: 'Update an employee\'s information'
  })
  @ApiBody({
    type: UpdateEmployeeDto,
    examples: {
      updateExample: {
        summary: 'Update Employee Example',
        value: {
          salary: 28000,
          emergencyContact: '+254734567890',
          benefits: [
            { name: 'nssf', amount: 1080 },
            { name: 'nhif', amount: 1700 },
            { name: 'housingLevy', amount: 420 }
          ]
        },
      }
    }
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated employee',
    schema: {
      type: 'object',
      example: {
        id: 'cmaerl8s10000l004pmlo1f7d',
        firstName: 'John',
        middleName: 'Mwangi',
        lastName: 'Kamau',
        phone: '+254712345678',
        emergencyContact: '+254734567890',
        idNumber: '12345678',
        idPhoto: null,
        employeeType: 'permanent',
        dateOfEmployment: '2025-01-15T00:00:00.000Z',
        endDate: null,
        role: 'milker',
        customRole: null,
        paymentSchedule: 'monthly',
        salary: 28000,
        typeOfEngagement: null,
        workSchedule: null,
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:30:00.000Z',
        farms: [
          {
            id: 'cmaerl8s10000l004pmlo1f7e',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            farmId: 'clh2x0f380001mk08x7v2p4m1',
            createdAt: '2025-05-30T16:00:00.000Z',
            updatedAt: '2025-05-30T16:00:00.000Z',
            farm: {
              id: 'clh2x0f380001mk08x7v2p4m1',
              name: 'Kamau Mixed Farm',
              county: 'Kiambu',
              administrativeLocation: 'Kikuyu'
            }
          }
        ],
        benefits: [
          {
            id: 'cmaerl8s10000l004pmlo1f7f',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'nssf',
            amount: 1080,
            createdAt: '2025-05-30T16:30:00.000Z',
            updatedAt: '2025-05-30T16:30:00.000Z'
          },
          {
            id: 'cmaerl8s10000l004pmlo1f7g',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'nhif',
            amount: 1700,
            createdAt: '2025-05-30T16:30:00.000Z',
            updatedAt: '2025-05-30T16:30:00.000Z'
          },
          {
            id: 'cmaerl8s10000l004pmlo1f7h',
            employeeId: 'cmaerl8s10000l004pmlo1f7d',
            name: 'housingLevy',
            amount: 420,
            createdAt: '2025-05-30T16:30:00.000Z',
            updatedAt: '2025-05-30T16:30:00.000Z'
          }
        ]
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete employee',
    description: 'Delete an employee'
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted employee',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Employee deleted successfully' }
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
