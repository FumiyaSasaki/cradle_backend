/*
  Warnings:

  - You are about to drop the column `vacacyFloors` on the `Building` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Building` DROP COLUMN `vacacyFloors`,
    ALTER COLUMN `vacancyFloors` DROP DEFAULT;
