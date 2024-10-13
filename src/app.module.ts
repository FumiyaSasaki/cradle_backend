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

@Module({
  imports: [BuildingModule, BlogModule, CompositeModule],
  controllers: [AppController, BuildingController, BlogController, CompositeController],
  providers: [AppService, PrismaService, BuildingService, BlogService, CompositeService],
})
export class AppModule {}
