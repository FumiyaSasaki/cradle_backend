import { Blog, Building, Image, Parking } from '@prisma/client';

export type ImageContentType = {
    imageContents: Image[]
};

export type BuildingWithImageContents = Building & { imageContents: Image[] };
export type ParkingWithImageContents = Parking & { imageContents: Image[] };
export type BlogWithImageContents = Blog & { imageContents: Image[] };
export type TopDataType = { building: BuildingWithImageContents[], parkingData: ParkingWithImageContents[], blog: BlogWithImageContents[], homeImages: Image[] };