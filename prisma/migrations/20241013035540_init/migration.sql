-- CreateTable
CREATE TABLE `Building` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `prefecture` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `town` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `building` VARCHAR(191) NOT NULL,
    `floorPlan` VARCHAR(191) NOT NULL,
    `age` DATETIME(3) NOT NULL,
    `direction` VARCHAR(191) NOT NULL,
    `vacacyFloors` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NOT NULL,
    `nearbyInformation` VARCHAR(191) NOT NULL,
    `distanceMinutes` INTEGER NOT NULL,
    `rent` INTEGER NOT NULL,
    `occupancyArea` INTEGER NOT NULL,
    `deposit` INTEGER NOT NULL,
    `keyMoney` INTEGER NOT NULL,
    `allFloors` INTEGER NOT NULL,
    `allRooms` INTEGER NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `isVacancy` BOOLEAN NOT NULL,
    `isExistParking` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Building_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `handleUid` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Blog_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
