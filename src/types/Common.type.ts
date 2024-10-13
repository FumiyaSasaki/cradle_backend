import { Blog, Building, Image } from '@prisma/client';

export type ImageContentType = {
    imageContents: Image[]
};

export type BuildingWithImageContents = Building & { imageContents: Image[] };
export type BlogWithImageContents = Blog & { imageContents: Image[] };
export type TopDataType = { building: BuildingWithImageContents[], blog: BlogWithImageContents[] };