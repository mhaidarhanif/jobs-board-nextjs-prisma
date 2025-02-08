/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Job` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Job_slug_key" ON "Job"("slug");
