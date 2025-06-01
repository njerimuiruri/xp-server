import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LivestockService } from './livestock.service';
import { CreateLivestockDto } from './dto/create-livestock.dto';
import { UpdateLivestockDto } from './dto/update-livestock.dto';
import { RecordMortalityDto } from './dto/record-mortality.dto';
import { UpdateLivestockStatusDto } from './dto/update-livestock-status.dto';
import { CreateHealthEventDto } from './dto/create-health-event.dto';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { CreateSaleDto } from './dto/create-sale.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('livestock')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('livestock')
export class LivestockController {
  constructor(private readonly livestockService: LivestockService) {}

  @Post()
  @ApiOperation({
    summary: 'Create new livestock',
    description:
      'Add a new livestock to the system. Can be either mammal (cattle, goats, sheep, etc.) or poultry.',
  })
  @ApiBody({
    type: CreateLivestockDto,
    examples: {
      dairyCattle: {
        summary: 'Dairy Cattle Example',
        value: {
          farmId: 'cmbduehjf0003l8048w6lbxxt',
          type: 'dairyCattle',
          category: 'mammal',
          mammal: {
            idNumber: 'KE-DAIRY-001',
            breedType: 'Holstein',
            phenotype: 'Black and White',
            dateOfBirth: '2023-05-15',
            gender: 'Female',
            sireId: 'SIRE-001',
            sireCode: 'S001',
            damId: 'DAM-001',
            damCode: 'D001',
            birthWeight: 35.5,
          },
        },
      },
      poultry: {
        summary: 'Poultry Example',
        value: {
          farmId: 'cmbduehjf0003l8048w6lbxxt',
          type: 'poultry',
          category: 'poultry',
          poultry: {
            flockId: 'FLOCK-2025-001',
            dateOfStocking: '2025-01-15',
            gender: 'Mixed',
            initialQuantity: 500,
            currentQuantity: 500,
            breedType: 'Broiler',
            sourceOfBirds: 'Kenchic Ltd',
            initialAverageWeight: 45.5,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully created livestock',
    schema: {
      type: 'object',
      example: {
        id: 'cmaerl8s10000l004pmlo1f7d',
        farmId: 'cmbduehjf0003l8048w6lbxxt',
        type: 'dairyCattle',
        category: 'mammal',
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:00:00.000Z',
        farm: {
          id: 'cmbduehjf0003l8048w6lbxxt',
          name: 'Kamau Mixed Farm',
          county: 'Kiambu',
          administrativeLocation: 'Kikuyu',
        },
        mammal: {
          id: 'cmaerl8s10000l004pmlo1f7e',
          idNumber: 'KE-DAIRY-001',
          breedType: 'Holstein',
          phenotype: 'Black and White',
          dateOfBirth: '2023-05-15',
          gender: 'Female',
          sireId: 'SIRE-001',
          sireCode: 'S001',
          damId: 'DAM-001',
          damCode: 'D001',
          birthWeight: 35.5,
          createdAt: '2025-05-30T16:00:00.000Z',
          updatedAt: '2025-05-30T16:00:00.000Z',
        },
        poultry: null,
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Validation Error' })
  @ApiResponse({ status: 404, description: 'Farm not found' })
  async create(@Body() createLivestockDto: CreateLivestockDto) {
    return this.livestockService.create(createLivestockDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all livestock',
    description:
      'Retrieve a paginated list of all livestock with optional search and filtering',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number (default: 1)',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Items per page (default: 10)',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search term for ID number, breed type, etc.',
  })
  @ApiQuery({
    name: 'farmId',
    required: false,
    type: String,
    description: 'Filter by farm ID',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    type: String,
    description:
      'Filter by livestock type (dairyCattle, beefCattle, dairyGoats, meatGoats, sheep, rabbit, swine, poultry)',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved livestock',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            example: {
              id: 'cmaerl8s10000l004pmlo1f7d',
              farmId: 'cmbduehjf0003l8048w6lbxxt',
              type: 'dairyCattle',
              category: 'mammal',
              createdAt: '2025-05-30T16:00:00.000Z',
              updatedAt: '2025-05-30T16:00:00.000Z',
              farm: {
                id: 'cmbduehjf0003l8048w6lbxxt',
                name: 'Kamau Mixed Farm',
                county: 'Kiambu',
                administrativeLocation: 'Kikuyu',
              },
              mammal: {
                id: 'cmaerl8s10000l004pmlo1f7e',
                livestockId: 'cmaerl8s10000l004pmlo1f7d',
                idNumber: 'KE-DAIRY-001',
                breedType: 'Holstein',
                phenotype: 'Black and White',
                dateOfBirth: '2023-05-15T00:00:00.000Z',
                gender: 'Female',
                sireId: 'SIRE-001',
                sireCode: 'S001',
                damId: 'DAM-001',
                damCode: 'D001',
                birthWeight: 35.5,
                createdAt: '2025-05-30T16:00:00.000Z',
                updatedAt: '2025-05-30T16:00:00.000Z',
              },
              poultry: null,
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'number', example: 100 },
            page: { type: 'number', example: 1 },
            pages: { type: 'number', example: 10 },
            hasNextPage: { type: 'boolean', example: true },
            hasPrevPage: { type: 'boolean', example: false },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('farmId') farmId?: string,
    @Query('type') type?: string,
  ) {
    return this.livestockService.findAll(page, limit, search, farmId, type);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get livestock by ID',
    description: 'Retrieve a specific livestock by its ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved livestock',
    schema: {
      type: 'object',
      example: {
        id: 'cmaerl8s10000l004pmlo1f7d',
        farmId: 'cmbduehjf0003l8048w6lbxxt',
        type: 'dairyCattle',
        category: 'mammal',
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:00:00.000Z',
        farm: {
          id: 'cmbduehjf0003l8048w6lbxxt',
          name: 'Kamau Mixed Farm',
          county: 'Kiambu',
          administrativeLocation: 'Kikuyu',
        },
        mammal: {
          id: 'cmaerl8s10000l004pmlo1f7e',
          livestockId: 'cmaerl8s10000l004pmlo1f7d',
          idNumber: 'KE-DAIRY-001',
          breedType: 'Holstein',
          phenotype: 'Black and White',
          dateOfBirth: '2023-05-15T00:00:00.000Z',
          gender: 'Female',
          sireId: 'SIRE-001',
          sireCode: 'S001',
          damId: 'DAM-001',
          damCode: 'D001',
          birthWeight: 35.5,
          createdAt: '2025-05-30T16:00:00.000Z',
          updatedAt: '2025-05-30T16:00:00.000Z',
        },
        poultry: null,
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  findOne(@Param('id') id: string) {
    return this.livestockService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update livestock',
    description: "Update a livestock's information",
  })
  @ApiBody({
    type: UpdateLivestockDto,
    examples: {
      updateMammal: {
        summary: 'Update Mammal Example',
        value: {
          mammal: {
            birthWeight: 38.5,
            phenotype: 'Black with White Spots',
          },
        },
      },
      updatePoultry: {
        summary: 'Update Poultry Example',
        value: {
          poultry: {
            currentQuantity: 480,
            initialAverageWeight: 50.2,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated livestock',
    schema: {
      type: 'object',
      example: {
        id: 'cmaerl8s10000l004pmlo1f7d',
        farmId: 'cmbduehjf0003l8048w6lbxxt',
        type: 'dairyCattle',
        category: 'mammal',
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:30:00.000Z',
        farm: {
          id: 'cmbduehjf0003l8048w6lbxxt',
          name: 'Kamau Mixed Farm',
          county: 'Kiambu',
          administrativeLocation: 'Kikuyu',
        },
        mammal: {
          id: 'cmaerl8s10000l004pmlo1f7e',
          livestockId: 'cmaerl8s10000l004pmlo1f7d',
          idNumber: 'KE-DAIRY-001',
          breedType: 'Holstein',
          phenotype: 'Black with White Spots',
          dateOfBirth: '2023-05-15T00:00:00.000Z',
          gender: 'Female',
          sireId: 'SIRE-001',
          sireCode: 'S001',
          damId: 'DAM-001',
          damCode: 'D001',
          birthWeight: 38.5,
          createdAt: '2025-05-30T16:00:00.000Z',
          updatedAt: '2025-05-30T16:30:00.000Z',
        },
        poultry: null,
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  update(
    @Param('id') id: string,
    @Body() updateLivestockDto: UpdateLivestockDto,
  ) {
    return this.livestockService.update(id, updateLivestockDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete livestock',
    description: 'Delete a livestock',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted livestock',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Livestock deleted successfully' },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  remove(@Param('id') id: string) {
    return this.livestockService.remove(id);
  }

  @Patch(':id/status')
  @ApiOperation({
    summary: 'Update livestock status',
    description:
      'Update the status of a livestock (active, deceased, sold, transferred)',
  })
  @ApiParam({ name: 'id', description: 'Livestock ID' })
  @ApiBody({
    type: UpdateLivestockStatusDto,
    examples: {
      deceased: {
        summary: 'Mark as Deceased',
        value: {
          status: 'deceased',
          reason: 'Natural causes due to age',
        },
      },
      sold: {
        summary: 'Mark as Sold',
        value: {
          status: 'sold',
          reason: 'Sold to local farmer',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated livestock status',
  })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateLivestockStatusDto,
  ) {
    return this.livestockService.updateStatus(id, updateStatusDto);
  }

  @Post('mortality')
  @ApiOperation({
    summary: 'Record livestock mortality',
    description: 'Record the death of a livestock and update its status',
  })
  @ApiBody({
    type: RecordMortalityDto,
    examples: {
      disease: {
        summary: 'Death by Disease',
        value: {
          livestockId: 'cmbdvqm6c0001hj9f4qafhjbe',
          date: '2025-05-30T10:00:00Z',
          cause: 'Disease',
          description: 'Animal showed symptoms of respiratory distress',
          reportedBy: 'John Doe (Farm Manager)',
          attachments: ['https://example.com/photo1.jpg'],
        },
      },
      accident: {
        summary: 'Death by Accident',
        value: {
          livestockId: 'cmbdvqm6c0001hj9f4qafhjbe',
          date: '2025-05-30T10:00:00Z',
          cause: 'Accident',
          description: 'Injury from farm equipment',
          reportedBy: 'Jane Smith (Farm Worker)',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully recorded mortality',
  })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  @ApiResponse({ status: 409, description: 'Mortality already recorded' })
  recordMortality(@Body() recordMortalityDto: RecordMortalityDto) {
    return this.livestockService.recordMortality(recordMortalityDto);
  }

  @Post('health-event')
  @ApiOperation({
    summary: 'Record livestock health event',
    description:
      'Record a health-related event such as vaccination, treatment, or check-up',
  })
  @ApiBody({
    type: CreateHealthEventDto,
    examples: {
      vaccination: {
        summary: 'Vaccination',
        value: {
          livestockId: 'cmbdvqm6c0001hj9f4qafhjbe',
          eventType: 'vaccination',
          date: '2025-05-30T10:00:00Z',
          description: 'Routine vaccination against foot and mouth disease',
          performedBy: 'Dr. Jane Smith (Veterinarian)',
          medications: ['Vaccine XYZ'],
          dosage: '10ml',
          cost: 2500,
          nextScheduled: '2025-08-30T10:00:00Z',
        },
      },
      treatment: {
        summary: 'Treatment',
        value: {
          livestockId: 'cmbdvqm6c0001hj9f4qafhjbe',
          eventType: 'treatment',
          date: '2025-05-30T10:00:00Z',
          description: 'Treatment for mild infection',
          performedBy: 'Dr. John Doe (Veterinarian)',
          medications: ['Antibiotic ABC', 'Anti-inflammatory XYZ'],
          dosage: '5ml twice daily for 5 days',
          cost: 3500,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully recorded health event',
  })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  createHealthEvent(@Body() createHealthEventDto: CreateHealthEventDto) {
    return this.livestockService.createHealthEvent(createHealthEventDto);
  }

  @Post('transfer')
  @ApiOperation({
    summary: 'Transfer livestock between farms',
    description: 'Record a transfer of livestock from one farm to another',
  })
  @ApiBody({
    type: CreateTransferDto,
    examples: {
      standardTransfer: {
        summary: 'Standard Transfer',
        value: {
          livestockId: 'cmbdvqm6c0001hj9f4qafhjbe',
          fromFarmId: 'cmbduehjf0003l8048w6lbxxt',
          toFarmId: 'cmbduehjf0003l8048w6lbxxu',
          transferDate: '2025-06-15T10:00:00Z',
          reason: 'Better grazing facilities at destination farm',
          transportMethod: 'Livestock transport truck',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully transferred livestock',
  })
  @ApiResponse({ status: 404, description: 'Livestock or farm not found' })
  @ApiResponse({
    status: 400,
    description: 'Livestock is not at the specified source farm',
  })
  createTransfer(@Body() createTransferDto: CreateTransferDto) {
    return this.livestockService.createTransfer(createTransferDto);
  }

  @Post('sale')
  @ApiOperation({
    summary: 'Record livestock sale',
    description: 'Record the sale of livestock and update its status',
  })
  @ApiBody({
    type: CreateSaleDto,
    examples: {
      standardSale: {
        summary: 'Standard Sale',
        value: {
          livestockId: 'cmbdvqm6c0001hj9f4qafhjbe',
          saleDate: '2025-06-15T10:00:00Z',
          buyerName: 'John Doe',
          buyerContact: '+254712345678',
          saleAmount: 50000,
          paymentMethod: 'mobile_money',
          receiptNumber: 'RCT-2025-001',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully recorded sale',
  })
  @ApiResponse({ status: 404, description: 'Livestock not found' })
  @ApiResponse({ status: 409, description: 'Livestock is already sold' })
  createSale(@Body() createSaleDto: CreateSaleDto) {
    return this.livestockService.createSale(createSaleDto);
  }

  @Get('statistics')
  @ApiOperation({
    summary: 'Get livestock statistics',
    description:
      'Get statistics about livestock including counts by category, status, and recent events',
  })
  @ApiQuery({
    name: 'farmId',
    required: false,
    type: String,
    description: 'Filter statistics by farm ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved livestock statistics',
  })
  getStatistics(@Query('farmId') farmId?: string) {
    return this.livestockService.getLivestockStatistics(farmId);
  }
}
