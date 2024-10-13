import { Injectable } from '@nestjs/common';
import { Building, Image, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BuildingService {
    constructor(private prisma: PrismaService) { };

    async getBuildingByUid(uid: string): Promise<Building & { imageContents: Image[] }> {
        const building: Building = await this.prisma.building.findUnique({ where: { uid } });
        const imageContents: Image[] = await this.prisma.image.findMany({ where: { handleUid: uid } });
        return { ...building, imageContents };
    };

    async getAllBuilding(): Promise<(Building & { imageContents: Image[] })[]> {
        const building: Building[] = await this.prisma.building.findMany();
        const image: Image[] = await this.prisma.image.findMany({ where: { type: 'building' } });
        const newBuilding: (Building & { imageContents: Image[] })[] = building.map(buildingItem => ({
            ...buildingItem, imageContents: image.filter(item => item.handleUid === buildingItem.uid)
        }));
        return newBuilding;
    };

};
