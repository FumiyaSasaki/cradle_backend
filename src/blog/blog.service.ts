import { Injectable } from '@nestjs/common';
import { Blog, Image } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogWithImageContents } from 'src/types/Common.type';

@Injectable()
export class BlogService {
    constructor(private prisma: PrismaService) { };

    async getBlogByUid(uid: string): Promise<Blog & { imageContents: Image[] }> {
        const blog: Blog = await this.prisma.blog.findUnique({ where: { uid } });
        const imageContents: Image[] = await this.prisma.image.findMany({ where: { handleUid: uid } });
        return { ...blog, imageContents };
    };

    async getAllBlog(): Promise<BlogWithImageContents[]> {
        const blog: Blog[] = await this.prisma.blog.findMany();
        const image: Image[] = await this.prisma.image.findMany({ where: { type: 'blog' } });
        const newBlog: BlogWithImageContents[] = blog.map(blogItem => ({
            ...blogItem, imageContents: image.filter(item => item.handleUid === blogItem.uid)
        }));
        return newBlog;
    };
}
