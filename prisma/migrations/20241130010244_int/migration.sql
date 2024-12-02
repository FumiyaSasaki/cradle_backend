/*
  Warnings:

  - You are about to alter the column `rent` on the `Building` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `occupancyArea` on the `Building` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Building` MODIFY `rent` DOUBLE NOT NULL,
    MODIFY `occupancyArea` DOUBLE NOT NULL;
