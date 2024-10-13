import { Body, Controller, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from '@prisma/client';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { };

    @Post('getblogbyuid')
    async getBlogByUid(@Body() uid: { uid: string }): Promise<Blog> {
        return this.blogService.getBlogByUid(uid.uid);
    };

    @Post('getallblog')
    async getAllBlog(): Promise<Blog[]> {
        return this.blogService.getAllBlog();
    };
};
