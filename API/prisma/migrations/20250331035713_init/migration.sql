-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "umidadeSolo1" INTEGER NOT NULL,
    "umidadeSolo2" INTEGER NOT NULL,
    "umidadeSolo3" INTEGER NOT NULL,
    "umidadeSolo4" INTEGER NOT NULL,
    "irrigador1" BOOLEAN NOT NULL,
    "irrigador2" BOOLEAN NOT NULL,
    "irrigador3" BOOLEAN NOT NULL,
    "irrigador4" BOOLEAN NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);
