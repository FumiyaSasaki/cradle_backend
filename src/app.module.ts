import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { BuildingService } from './building/building.service';
import { BuildingController } from './building/building.controller';
import { BuildingModule } from './building/building.module';
import { BlogController } from './blog/blog.controller';
import { BlogModule } from './blog/blog.module';
import { CompositeController } from './composite/composite.controller';
import { CompositeService } from './composite/composite.service';
import { CompositeModule } from './composite/composite.module';
import { BlogService } from './blog/blog.service';
import { ParkingService } from './parking/parking.service';
import { ParkingController } from './parking/parking.controller';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [BuildingModule, BlogModule, CompositeModule, ParkingModule],
  controllers: [AppController, BuildingController, BlogController, CompositeController, ParkingController],
  providers: [AppService, PrismaService, BuildingService, BlogService, CompositeService, ParkingService],
})
export class AppModule {}
