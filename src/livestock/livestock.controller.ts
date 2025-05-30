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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
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
          farmId: 'clh2x0f380001mk08x7v2p4m1',
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
          farmId: 'clh2x0f380001mk08x7v2p4m1',
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
        farmId: 'clh2x0f380001mk08x7v2p4m1',
        type: 'dairyCattle',
        category: 'mammal',
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:00:00.000Z',
        farm: {
          id: 'clh2x0f380001mk08x7v2p4m1',
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
              farmId: 'clh2x0f380001mk08x7v2p4m1',
              type: 'dairyCattle',
              category: 'mammal',
              createdAt: '2025-05-30T16:00:00.000Z',
              updatedAt: '2025-05-30T16:00:00.000Z',
              farm: {
                id: 'clh2x0f380001mk08x7v2p4m1',
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
        farmId: 'clh2x0f380001mk08x7v2p4m1',
        type: 'dairyCattle',
        category: 'mammal',
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:00:00.000Z',
        farm: {
          id: 'clh2x0f380001mk08x7v2p4m1',
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
        farmId: 'clh2x0f380001mk08x7v2p4m1',
        type: 'dairyCattle',
        category: 'mammal',
        createdAt: '2025-05-30T16:00:00.000Z',
        updatedAt: '2025-05-30T16:30:00.000Z',
        farm: {
          id: 'clh2x0f380001mk08x7v2p4m1',
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
}
