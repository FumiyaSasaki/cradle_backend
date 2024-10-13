import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({})
export class BlogModule {
  controllers: [BlogController]
  providers: [BlogService, PrismaService]
}
