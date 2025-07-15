import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';
import { EmployeesModule } from './employees/employees.module';
import { LivestockModule } from './livestock/livestock.module';
import { BreedingModule } from './breeding/breeding.module';
import { FeedingModule } from './feeding/feeding.module';
import { InventoryModule } from './inventory/inventory.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    UsersModule,
    FarmsModule,
    EmployeesModule,
    LivestockModule,
    BreedingModule,
    FeedingModule,
    InventoryModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
