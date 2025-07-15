-- CreateTable
CREATE TABLE "AllergyRecord" (
    "id" TEXT NOT NULL,
    "animalIdOrFlockId" TEXT NOT NULL,
    "dateRecorded" TIMESTAMP(3) NOT NULL,
    "cause" TEXT NOT NULL,
    "remedy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "farmId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "livestockId" TEXT NOT NULL,

    CONSTRAINT "AllergyRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoosterRecord" (
    "id" TEXT NOT NULL,
    "animalIdOrFlockId" TEXT NOT NULL,
    "boostersOrAdditives" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "quantityGiven" DOUBLE PRECISION NOT NULL,
    "quantityUnit" TEXT NOT NULL,
    "dateAdministered" TIMESTAMP(3) NOT NULL,
    "costOfBooster" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "farmId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "livestockId" TEXT NOT NULL,

    CONSTRAINT "BoosterRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaccinationRecord" (
    "id" TEXT NOT NULL,
    "animalIdOrFlockId" TEXT NOT NULL,
    "vaccinationAgainst" TEXT NOT NULL,
    "drugAdministered" TEXT NOT NULL,
    "dateAdministered" TIMESTAMP(3) NOT NULL,
    "dosage" DOUBLE PRECISION NOT NULL,
    "costOfVaccine" DOUBLE PRECISION,
    "administeredBy" TEXT,
    "practiceId" TEXT,
    "costOfService" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "farmId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "livestockId" TEXT NOT NULL,

    CONSTRAINT "VaccinationRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AllergyRecord" ADD CONSTRAINT "AllergyRecord_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllergyRecord" ADD CONSTRAINT "AllergyRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllergyRecord" ADD CONSTRAINT "AllergyRecord_livestockId_fkey" FOREIGN KEY ("livestockId") REFERENCES "Livestock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterRecord" ADD CONSTRAINT "BoosterRecord_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterRecord" ADD CONSTRAINT "BoosterRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoosterRecord" ADD CONSTRAINT "BoosterRecord_livestockId_fkey" FOREIGN KEY ("livestockId") REFERENCES "Livestock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaccinationRecord" ADD CONSTRAINT "VaccinationRecord_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaccinationRecord" ADD CONSTRAINT "VaccinationRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaccinationRecord" ADD CONSTRAINT "VaccinationRecord_livestockId_fkey" FOREIGN KEY ("livestockId") REFERENCES "Livestock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
