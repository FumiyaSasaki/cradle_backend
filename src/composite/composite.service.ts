import { Injectable } from '@nestjs/common';
import { Blog, Building, Image, Parking } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogWithImageContents, BuildingWithImageContents, ParkingWithImageContents, TopDataType } from 'src/types/Common.type';

@Injectable()
export class CompositeService {
    constructor(private prisma: PrismaService) { };

    async getAllTopData(): Promise<TopDataType> {
        const building: Building[] = await this.prisma.building.findMany();
        const parking: Parking[] = await this.prisma.parking.findMany();
        const blog: Blog[] = await this.prisma.blog.findMany();
        const image: Image[] = await this.prisma.image.findMany();
        const newBuilding: BuildingWithImageContents[] = building.map(buildingItem => ({
            ...buildingItem, imageContents: image.filter(item => item.handleUid === buildingItem.uid)
        }));
        const newParking: ParkingWithImageContents[] = parking.map(parkingItem => ({
            ...parkingItem, imageContents: image.filter(item => item.handleUid === parkingItem.uid)
        }));
        const newBlog: BlogWithImageContents[] = blog.map(blogItem => ({
            ...blogItem, imageContents: image.filter(item => item.handleUid === blogItem.uid)
        }));
        const homeImages: Image[] = image.filter(item => item.type === 'home');
        return { building: newBuilding, parkingData: newParking, blog: newBlog, homeImages };
    };
};
