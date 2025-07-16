import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateAllergyRecordDto } from './dto/create-allergy-record.dto';
import { UpdateAllergyRecordDto } from './dto/update-allergy-record.dto';
import { CreateBoosterRecordDto } from './dto/create-booster-record.dto';
import { UpdateBoosterRecordDto } from './dto/update-booster-record.dto';
import { CreateVaccinationRecordDto } from './dto/create-vaccination-record.dto';
import { UpdateVaccinationRecordDto } from './dto/update-vaccination-record.dto';
import { CreateTreatmentRecordDto } from './dto/create-treatment-record.dto';
import { UpdateTreatmentRecordDto } from './dto/update-treatment-record.dto';
import { CreateDewormingRecordDto } from './dto/create-deworming-record.dto';
import { UpdateDewormingRecordDto } from './dto/update-deworming-record.dto';
import { CreateGeneticDisorderRecordDto } from './dto/create-genetic-disorder-record.dto';
import { UpdateGeneticDisorderRecordDto } from './dto/update-genetic-disorder-record.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Health')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  // Allergy Records Endpoints
  @Post('allergies')
  @ApiOperation({ summary: 'Create a new allergy record' })
  @ApiResponse({
    status: 201,
    description: 'The allergy record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  createAllergyRecord(
    @Body() createAllergyRecordDto: CreateAllergyRecordDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.healthService.createAllergyRecord(
      createAllergyRecordDto,
      userId,
    );
  }

  @Get('allergies')
  @ApiOperation({ summary: 'Get all allergy records for a farm' })
  @ApiResponse({ status: 200, description: 'Return all allergy records.' })
  findAllAllergyRecords(@Query('farmId') farmId: string) {
    return this.healthService.findAllAllergyRecords(farmId);
  }

  @Get('allergies/:id')
  @ApiOperation({ summary: 'Get an allergy record by ID' })
  @ApiResponse({ status: 200, description: 'Return the allergy record.' })
  @ApiResponse({ status: 404, description: 'Allergy record not found.' })
  findOneAllergyRecord(@Param('id') id: string) {
    return this.healthService.findOneAllergyRecord(id);
  }

  @Patch('allergies/:id')
  @ApiOperation({ summary: 'Update an allergy record' })
  @ApiResponse({
    status: 200,
    description: 'The allergy record has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Allergy record not found.' })
  updateAllergyRecord(
    @Param('id') id: string,
    @Body() updateAllergyRecordDto: UpdateAllergyRecordDto,
  ) {
    return this.healthService.updateAllergyRecord(id, updateAllergyRecordDto);
  }

  @Delete('allergies/:id')
  @ApiOperation({ summary: 'Delete an allergy record' })
  @ApiResponse({
    status: 200,
    description: 'The allergy record has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Allergy record not found.' })
  removeAllergyRecord(@Param('id') id: string) {
    return this.healthService.removeAllergyRecord(id);
  }

  // Booster Records Endpoints
  @Post('boosters')
  @ApiOperation({ summary: 'Create a new booster record' })
  @ApiResponse({
    status: 201,
    description: 'The booster record has been successfully created.',
  })
  createBoosterRecord(
    @Body() createBoosterRecordDto: CreateBoosterRecordDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.healthService.createBoosterRecord(
      createBoosterRecordDto,
      userId,
    );
  }

  @Get('boosters')
  @ApiOperation({ summary: 'Get all booster records for a farm' })
  findAllBoosterRecords(@Query('farmId') farmId: string) {
    return this.healthService.findAllBoosterRecords(farmId);
  }

  @Get('boosters/:id')
  @ApiOperation({ summary: 'Get a booster record by ID' })
  findOneBoosterRecord(@Param('id') id: string) {
    return this.healthService.findOneBoosterRecord(id);
  }

  @Patch('boosters/:id')
  @ApiOperation({ summary: 'Update a booster record' })
  updateBoosterRecord(
    @Param('id') id: string,
    @Body() updateBoosterRecordDto: UpdateBoosterRecordDto,
  ) {
    return this.healthService.updateBoosterRecord(id, updateBoosterRecordDto);
  }

  @Delete('boosters/:id')
  @ApiOperation({ summary: 'Delete a booster record' })
  removeBoosterRecord(@Param('id') id: string) {
    return this.healthService.removeBoosterRecord(id);
  }

  // Vaccination Records Endpoints
  @Post('vaccinations')
  @ApiOperation({ summary: 'Create a new vaccination record' })
  @ApiResponse({
    status: 201,
    description: 'The vaccination record has been successfully created.',
  })
  createVaccinationRecord(
    @Body() createVaccinationRecordDto: CreateVaccinationRecordDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.healthService.createVaccinationRecord(
      createVaccinationRecordDto,
      userId,
    );
  }

  @Get('vaccinations')
  @ApiOperation({ summary: 'Get all vaccination records for a farm' })
  findAllVaccinationRecords(@Query('farmId') farmId: string) {
    return this.healthService.findAllVaccinationRecords(farmId);
  }

  @Get('vaccinations/:id')
  @ApiOperation({ summary: 'Get a vaccination record by ID' })
  findOneVaccinationRecord(@Param('id') id: string) {
    return this.healthService.findOneVaccinationRecord(id);
  }

  @Patch('vaccinations/:id')
  @ApiOperation({ summary: 'Update a vaccination record' })
  updateVaccinationRecord(
    @Param('id') id: string,
    @Body() updateVaccinationRecordDto: UpdateVaccinationRecordDto,
  ) {
    return this.healthService.updateVaccinationRecord(
      id,
      updateVaccinationRecordDto,
    );
  }

  @Delete('vaccinations/:id')
  @ApiOperation({ summary: 'Delete a vaccination record' })
  removeVaccinationRecord(@Param('id') id: string) {
    return this.healthService.removeVaccinationRecord(id);
  }

  // Treatment Records Endpoints
  @Post('treatments')
  @ApiOperation({ summary: 'Create a new treatment record' })
  @ApiResponse({
    status: 201,
    description: 'The treatment record has been successfully created.',
  })
  createTreatmentRecord(
    @Body() createTreatmentRecordDto: CreateTreatmentRecordDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.healthService.createTreatmentRecord(
      createTreatmentRecordDto,
      userId,
    );
  }

  @Get('treatments')
  @ApiOperation({ summary: 'Get all treatment records for a farm' })
  findAllTreatmentRecords(@Query('farmId') farmId: string) {
    return this.healthService.findAllTreatmentRecords(farmId);
  }

  @Get('treatments/:id')
  @ApiOperation({ summary: 'Get a treatment record by ID' })
  findOneTreatmentRecord(@Param('id') id: string) {
    return this.healthService.findOneTreatmentRecord(id);
  }

  @Patch('treatments/:id')
  @ApiOperation({ summary: 'Update a treatment record' })
  updateTreatmentRecord(
    @Param('id') id: string,
    @Body() updateTreatmentRecordDto: UpdateTreatmentRecordDto,
  ) {
    return this.healthService.updateTreatmentRecord(id, updateTreatmentRecordDto);
  }

  @Delete('treatments/:id')
  @ApiOperation({ summary: 'Delete a treatment record' })
  removeTreatmentRecord(@Param('id') id: string) {
    return this.healthService.removeTreatmentRecord(id);
  }

  // Deworming Records Endpoints
  @Post('deworming-records')
  @ApiOperation({ summary: 'Create a new deworming record' })
  createDewormingRecord(
    @Body() createDewormingRecordDto: CreateDewormingRecordDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.healthService.createDewormingRecord(
      createDewormingRecordDto,
      userId,
    );
  }

  @Get('deworming-records')
  @ApiOperation({ summary: 'Get all deworming records for a farm' })
  findAllDewormingRecords(@Query('farmId') farmId: string) {
    return this.healthService.findAllDewormingRecords(farmId);
  }

  @Get('deworming-records/:id')
  @ApiOperation({ summary: 'Get a deworming record by ID' })
  findOneDewormingRecord(@Param('id') id: string) {
    return this.healthService.findOneDewormingRecord(id);
  }

  @Patch('deworming-records/:id')
  @ApiOperation({ summary: 'Update a deworming record' })
  updateDewormingRecord(
    @Param('id') id: string,
    @Body() updateDewormingRecordDto: UpdateDewormingRecordDto,
  ) {
    return this.healthService.updateDewormingRecord(id, updateDewormingRecordDto);
  }

  @Delete('deworming-records/:id')
  @ApiOperation({ summary: 'Delete a deworming record' })
  removeDewormingRecord(@Param('id') id: string) {
    return this.healthService.removeDewormingRecord(id);
  }

  // Genetic Disorder Records Endpoints
  @Post('genetic-disorder-records')
  @ApiOperation({ summary: 'Create a new genetic disorder record' })
  createGeneticDisorderRecord(
    @Body() createGeneticDisorderRecordDto: CreateGeneticDisorderRecordDto,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.healthService.createGeneticDisorderRecord(
      createGeneticDisorderRecordDto,
      userId,
    );
  }

  @Get('genetic-disorder-records')
  @ApiOperation({ summary: 'Get all genetic disorder records for a farm' })
  findAllGeneticDisorderRecords(@Query('farmId') farmId: string) {
    return this.healthService.findAllGeneticDisorderRecords(farmId);
  }

  @Get('genetic-disorder-records/:id')
  @ApiOperation({ summary: 'Get a genetic disorder record by ID' })
  findOneGeneticDisorderRecord(@Param('id') id: string) {
    return this.healthService.findOneGeneticDisorderRecord(id);
  }

  @Patch('genetic-disorder-records/:id')
  @ApiOperation({ summary: 'Update a genetic disorder record' })
  updateGeneticDisorderRecord(
    @Param('id') id: string,
    @Body() updateGeneticDisorderRecordDto: UpdateGeneticDisorderRecordDto,
  ) {
    return this.healthService.updateGeneticDisorderRecord(
      id,
      updateGeneticDisorderRecordDto,
    );
  }

  @Delete('genetic-disorder-records/:id')
  @ApiOperation({ summary: 'Delete a genetic disorder record' })
  removeGeneticDisorderRecord(@Param('id') id: string) {
    return this.healthService.removeGeneticDisorderRecord(id);
  }
}
