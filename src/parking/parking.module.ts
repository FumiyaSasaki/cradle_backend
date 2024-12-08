import { Module } from '@nestjs/common';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({})
export class ParkingModule {
    controllers: [ParkingController]
    providers: [ParkingService, PrismaService]
}
