import { Injectable } from '@nestjs/common';
import { Parking, Image } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParkingService {
    constructor(private prisma: PrismaService) { };

    async getParkingByUid(uid: string): Promise<Parking & { imageContents: Image[] }> {
        const parking: Parking = await this.prisma.parking.findUnique({ where: { uid } });
        const imageContents: Image[] = await this.prisma.image.findMany({ where: { handleUid: uid } });
        return { ...parking, imageContents };
    };

    async getAllParking(): Promise<(Parking & { imageContents: Image[] })[]> {
        const parking: Parking[] = await this.prisma.parking.findMany();
        const image: Image[] = await this.prisma.image.findMany({ where: { type: 'parking' } });
        const newParking: (Parking & { imageContents: Image[] })[] = parking.map(parkingItem => ({
            ...parkingItem, imageContents: image.filter(item => item.handleUid === parkingItem.uid)
        }));
        return newParking;
    };
}
