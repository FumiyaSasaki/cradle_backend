import { Injectable } from '@nestjs/common';
import { Blog, Building, Image } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogWithImageContents, BuildingWithImageContents, TopDataType } from 'src/types/Common.type';

@Injectable()
export class CompositeService {
    constructor(private prisma: PrismaService) { };

    async getAllTopData(): Promise<TopDataType> {
        const building: Building[] = await this.prisma.building.findMany();
        const blog: Blog[] = await this.prisma.blog.findMany();
        const image: Image[] = await this.prisma.image.findMany();
        const newBuilding: BuildingWithImageContents[] = building.map(buildingItem => ({
            ...buildingItem, imageContents: image.filter(item => item.handleUid === buildingItem.uid)
        }));
        const newBlog: BlogWithImageContents[] = blog.map(blogItem => ({
            ...blogItem, imageContents: image.filter(item => item.handleUid === blogItem.uid)
        }));
        return { building: newBuilding, blog: newBlog };
    };
};
