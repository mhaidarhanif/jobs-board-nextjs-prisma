/*
  Warnings:

  - Made the column `slug` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "slug" SET NOT NULL;
