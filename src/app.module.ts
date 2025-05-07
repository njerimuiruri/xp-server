import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FarmsModule } from './farms/farms.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, FarmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
