/*
  Warnings:

  - Added the required column `entrada` to the `Inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salida` to the `Inventario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventario` ADD COLUMN `entrada` INTEGER NOT NULL,
    ADD COLUMN `salida` INTEGER NOT NULL;
