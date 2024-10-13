import { Body, Controller, Post } from '@nestjs/common';
import { BuildingService } from './building.service';
import { Building } from '@prisma/client';

@Controller('building')
export class BuildingController {

    constructor(private readonly buildingService: BuildingService) { };

    @Post('getbuildingbyuid')
    // @ApiResponse({ status: HttpStatus.OK, type: MenuResponse })
    async getBuildingByUid(@Body() uid: { uid: string }): Promise<Building> {
        return this.buildingService.getBuildingByUid(uid.uid);
    };

    @Post('getallbuilding')
    async getAllBuilding(): Promise<Building[]> {
        return this.buildingService.getAllBuilding();
    };
};
