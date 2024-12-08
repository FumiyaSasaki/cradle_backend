-- AlterTable
ALTER TABLE `Building` ADD COLUMN `vacancyFloors` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `Parking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `prefecture` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `town` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `age` DATETIME(3) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `nearbyInformation` VARCHAR(191) NOT NULL,
    `distanceMinutes` INTEGER NOT NULL,
    `deposit` INTEGER NOT NULL,
    `keyMoney` INTEGER NOT NULL,
    `allPlaces` INTEGER NOT NULL,
    `rent` DOUBLE NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Parking_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
