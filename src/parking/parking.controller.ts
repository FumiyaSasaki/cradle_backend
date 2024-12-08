import { Body, Controller, Post } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { Parking } from '@prisma/client';

@Controller('parking')
export class ParkingController {

    constructor(private readonly parkingService: ParkingService) { };

    @Post('getparkingbyuid')
    // @ApiResponse({ status: HttpStatus.OK, type: MenuResponse })
    async getParkingByUid(@Body() uid: { uid: string }): Promise<Parking> {
        return this.parkingService.getParkingByUid(uid.uid);
    };

    @Post('getallparking')
    async getAllParking(): Promise<Parking[]> {
        return this.parkingService.getAllParking();
    };
}
