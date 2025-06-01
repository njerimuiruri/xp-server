import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BreedingService } from './breeding.service';
import { CreateBreedingRecordDto, UpdateBreedingRecordDto, RecordBirthDto, RegisterOffspringDto } from './dto';

@ApiTags('breeding')
@Controller('breeding')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BreedingController {
  constructor(private readonly breedingService: BreedingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new breeding record' })
  @ApiResponse({
    status: 201,
    description: 'The breeding record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Livestock or farm not found.' })
  create(@Body() createBreedingRecordDto: CreateBreedingRecordDto) {
    return this.breedingService.create(createBreedingRecordDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all breeding records' })
  @ApiQuery({
    name: 'farmId',
    required: false,
    description: 'Filter by farm ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns all breeding records, optionally filtered by farm.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findAll(@Query('farmId') farmId?: string) {
    return this.breedingService.findAll(farmId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a breeding record by ID' })
  @ApiParam({ name: 'id', description: 'Breeding record ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the breeding record with the specified ID.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Breeding record not found.' })
  findOne(@Param('id') id: string) {
    return this.breedingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a breeding record' })
  @ApiParam({ name: 'id', description: 'Breeding record ID' })
  @ApiResponse({
    status: 200,
    description: 'The breeding record has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Breeding record not found.' })
  update(
    @Param('id') id: string,
    @Body() updateBreedingRecordDto: UpdateBreedingRecordDto,
  ) {
    return this.breedingService.update(id, updateBreedingRecordDto);
  }

  @Post(':id/record-birth')
  @ApiOperation({ summary: 'Record birth for a breeding record' })
  @ApiParam({ name: 'id', description: 'Breeding record ID' })
  @ApiBody({ type: RecordBirthDto })
  @ApiResponse({
    status: 200,
    description: 'Birth has been successfully recorded.',
  })
  @ApiResponse({ status: 400, description: 'Bad request or birth already recorded.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Breeding record not found.' })
  recordBirth(@Param('id') id: string, @Body() recordBirthDto: RecordBirthDto) {
    return this.breedingService.recordBirth(id, recordBirthDto);
  }

  @Post('offspring/:id/register-as-livestock')
  @ApiOperation({ summary: 'Register an offspring as livestock' })
  @ApiParam({ name: 'id', description: 'Offspring ID' })
  @ApiBody({ type: RegisterOffspringDto })
  @ApiResponse({
    status: 200,
    description: 'Offspring has been successfully registered as livestock.',
  })
  @ApiResponse({ status: 400, description: 'Bad request or already registered.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Offspring not found.' })
  registerOffspringAsLivestock(
    @Param('id') id: string,
    @Body() livestockData: RegisterOffspringDto,
  ) {
    return this.breedingService.registerOffspringAsLivestock(id, livestockData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a breeding record' })
  @ApiParam({ name: 'id', description: 'Breeding record ID' })
  @ApiResponse({
    status: 200,
    description: 'The breeding record has been successfully deleted.',
  })
  @ApiResponse({ status: 400, description: 'Cannot delete record with registered offspring.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Breeding record not found.' })
  remove(@Param('id') id: string) {
    return this.breedingService.remove(id);
  }

  @Get('statistics/:farmId')
  @ApiOperation({ summary: 'Get breeding statistics for a farm' })
  @ApiParam({ name: 'farmId', description: 'Farm ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns breeding statistics for the specified farm.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  getBreedingStatistics(@Param('farmId') farmId: string) {
    if (!farmId) {
      throw new BadRequestException('Farm ID is required');
    }
    return this.breedingService.getBreedingStatistics(farmId);
  }
}
