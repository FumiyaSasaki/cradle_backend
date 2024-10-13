import { Controller, Post } from '@nestjs/common';
import { TopDataType } from 'src/types/Common.type';
import { CompositeService } from './composite.service';

@Controller('composite')
export class CompositeController {
    constructor(private readonly compositeService: CompositeService) { };

    @Post('getalltopdata')
    async getAllTopData(): Promise<TopDataType> {
        return this.compositeService.getAllTopData();
    };
}
