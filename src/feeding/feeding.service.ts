import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';

@Injectable()
export class FeedingService {
  constructor(private prisma: PrismaService) {}

  async create(createFeedingDto: CreateFeedingDto) {
    const { farmId, userId, feedDetails, ...feedingProgramData } =
      createFeedingDto;

    const farm = await this.prisma.farm.findUnique({ where: { id: farmId } });
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
        feedDetails: {
          create: feedDetails,
        },
      },
      include: {
        feedDetails: true,
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
          feedDetails: true,
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
        feedDetails: true,
      },
    });

    if (!feedingProgram) {
      throw new NotFoundException(`Feeding program with ID ${id} not found`);
    }

    return feedingProgram;
  }

  async update(id: string, updateFeedingDto: UpdateFeedingDto) {
    const { feedDetails, ...programData } = updateFeedingDto;

    return this.prisma.$transaction(async (prisma) => {
      const existingProgram = await prisma.feedingProgram.findUnique({
        where: { id },
      });

      if (!existingProgram) {
        throw new NotFoundException(`Feeding program with ID ${id} not found`);
      }

      // Update the feeding program itself
      const updatedProgram = await prisma.feedingProgram.update({
        where: { id },
        data: {
          ...programData,
        },
      });

      if (feedDetails) {
        // Delete existing feed details
        await prisma.feedDetails.deleteMany({
          where: { feedingProgramId: id },
        });

        // Create new feed details
        await prisma.feedDetails.createMany({
          data: feedDetails.map((detail) => ({
            ...detail,
            feedingProgramId: id,
          })),
        });
      }

      return prisma.feedingProgram.findUnique({
        where: { id },
        include: { feedDetails: true },
      });
    });
  }

  async remove(id: string) {
    const feedingProgram = await this.prisma.feedingProgram.findUnique({
      where: { id },
    });

    if (!feedingProgram) {
      throw new NotFoundException(`Feeding program with ID ${id} not found`);
    }

    // With `onDelete: Cascade` in the schema, Prisma will automatically delete related FeedDetails.
    await this.prisma.feedingProgram.delete({ where: { id } });

    return {
      message: `Feeding program with ID ${id} and its details have been removed.`,
    };
  }
}
