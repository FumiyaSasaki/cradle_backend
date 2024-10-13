import { Module } from '@nestjs/common';
import { BuildingController } from './building.controller';
import { BuildingService } from './building.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({})
export class BuildingModule {
    controllers: [BuildingController]
    providers: [BuildingService, PrismaService]
};
