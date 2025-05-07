import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateFarmDto } from './dto/update-farm.dto';

@Injectable()
export class FarmsService {
  constructor(private prisma: PrismaService) { }

  async findAll(page = 1, limit = 10, search?: string) {
    const skip = (page - 1) * limit;

    const where = search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' as const } },
        { county: { contains: search, mode: 'insensitive' as const } },
        { administrativeLocation: { contains: search, mode: 'insensitive' as const } },
      ],
    } : {};

    const [farms, total] = await Promise.all([
      this.prisma.farm.findMany({
        skip,
        take: limit,
        where,
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              phoneNumber: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prisma.farm.count({ where }),
    ]);

    const pages = Math.ceil(total / limit);

    return {
      data: farms,
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
    const farm = await this.prisma.farm.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            email: true,
          },
        },
      },
    });

    if (!farm) {
      throw new NotFoundException(`Farm with ID ${id} not found`);
    }

    return farm;
  }

  async update(id: string, updateFarmDto: UpdateFarmDto) {
    const farm = await this.prisma.farm.findUnique({
      where: { id },
    });

    if (!farm) {
      throw new NotFoundException(`Farm with ID ${id} not found`);
    }

    return this.prisma.farm.update({
      where: { id },
      data: updateFarmDto,
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            email: true,
          },
        },
      },
    });
  }

  async remove(id: string) {
    const farm = await this.prisma.farm.findUnique({
      where: { id },
    });

    if (!farm) {
      throw new NotFoundException(`Farm with ID ${id} not found`);
    }

    await this.prisma.farm.delete({
      where: { id },
    });

    return { message: 'Farm deleted successfully' };
  }
}
