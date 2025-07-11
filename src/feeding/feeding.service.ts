import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';

@Injectable()
export class FeedingService {
  constructor(private prisma: PrismaService) {}

  async create(createFeedingDto: CreateFeedingDto) {
    const {
      farmId,
      userId,
      basal,
      concentrate,
      supplement,
      ...feedingProgramData
    } = createFeedingDto;
    // console.log(userId);
    // Verify farm and user exist
    const farm = await this.prisma.farm.findFirst({
      where: { userId: userId },
    });
    // console.log(farm);
    if (!farm) {
      throw new NotFoundException(`Farm with ID ${farmId} not found`);
    }
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.feedingProgram.create({
      data: {
        ...feedingProgramData,
        farm: { connect: { id: farmId } },
        user: { connect: { id: userId } },
        basal: { create: basal },
        concentrate: concentrate ? { create: concentrate } : undefined,
        supplement: supplement ? { create: supplement } : undefined,
      },
      include: {
        farm: true,
        user: true,
        basal: true,
        concentrate: true,
        supplement: true,
      },
    });
  }

  async findAll(farmId: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const take = limit;

    const [feedingPrograms, total] = await this.prisma.$transaction([
      this.prisma.feedingProgram.findMany({
        where: { farmId },
        skip,
        take,
        include: {
          basal: true,
          concentrate: true,
          supplement: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.feedingProgram.count({ where: { farmId } }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data: feedingPrograms,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  }

  async findOne(id: string) {
    const feedingProgram = await this.prisma.feedingProgram.findUnique({
      where: { id },
      include: {
        farm: true,
        user: true,
        basal: true,
        concentrate: true,
        supplement: true,
      },
    });

    if (!feedingProgram) {
      throw new NotFoundException(`Feeding program with ID ${id} not found`);
    }

    return feedingProgram;
  }

  async update(id: string, updateFeedingDto: UpdateFeedingDto) {
    const { basal, concentrate, supplement, ...programData } = updateFeedingDto;

    const existingProgram = await this.prisma.feedingProgram.findUnique({
      where: { id },
    });
    if (!existingProgram) {
      throw new NotFoundException(`Feeding program with ID ${id} not found`);
    }

    return this.prisma.feedingProgram.update({
      where: { id },
      data: {
        ...programData,
        basal: basal ? { update: basal } : undefined,
        concentrate: concentrate ? { update: concentrate } : undefined,
        supplement: supplement ? { update: supplement } : undefined,
      },
      include: {
        basal: true,
        concentrate: true,
        supplement: true,
      },
    });
  }

  async remove(id: string) {
    const feedingProgram = await this.prisma.feedingProgram.findUnique({
      where: { id },
      include: { basal: true, concentrate: true, supplement: true },
    });

    if (!feedingProgram) {
      throw new NotFoundException(`Feeding program with ID ${id} not found`);
    }

    // Manually delete related FeedDetails records
    const deleteDetailsPromises = [];
    if (feedingProgram.basalId) {
      deleteDetailsPromises.push(
        this.prisma.feedDetails.delete({
          where: { id: feedingProgram.basalId },
        }),
      );
    }
    if (feedingProgram.concentrateId) {
      deleteDetailsPromises.push(
        this.prisma.feedDetails.delete({
          where: { id: feedingProgram.concentrateId },
        }),
      );
    }
    if (feedingProgram.supplementId) {
      deleteDetailsPromises.push(
        this.prisma.feedDetails.delete({
          where: { id: feedingProgram.supplementId },
        }),
      );
    }

    await this.prisma.$transaction([
      ...deleteDetailsPromises,
      this.prisma.feedingProgram.delete({ where: { id } }),
    ]);

    return {
      message: `Feeding program with ID ${id} and its details have been removed.`,
    };
  }
}
