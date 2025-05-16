/*
  Warnings:

  - You are about to drop the column `irrigador1` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `irrigador2` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `irrigador3` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `irrigador4` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `umidadeSolo1` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `umidadeSolo2` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `umidadeSolo3` on the `Sensor` table. All the data in the column will be lost.
  - You are about to drop the column `umidadeSolo4` on the `Sensor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sensor" DROP COLUMN "irrigador1",
DROP COLUMN "irrigador2",
DROP COLUMN "irrigador3",
DROP COLUMN "irrigador4",
DROP COLUMN "umidadeSolo1",
DROP COLUMN "umidadeSolo2",
DROP COLUMN "umidadeSolo3",
DROP COLUMN "umidadeSolo4",
ADD COLUMN     "dispositivo" TEXT,
ADD COLUMN     "irrigador" BOOLEAN,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "umidade" INTEGER;
