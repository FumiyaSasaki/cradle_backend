import { Module } from '@nestjs/common';
import { CompositeController } from './composite.controller';
import { CompositeService } from './composite.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({})
export class CompositeModule {
    controllers: [CompositeController]
    providers: [CompositeService, PrismaService]
};
