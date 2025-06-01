-- CreateTable
CREATE TABLE "BreedingRecord" (
  "id" TEXT NOT NULL,
  "damId" TEXT NOT NULL,
  "sireId" TEXT,
  "purpose" TEXT NOT NULL,
  "strategy" TEXT NOT NULL,
  "serviceType" TEXT NOT NULL,
  "serviceDate" TIMESTAMP(3) NOT NULL,
  "numServices" INTEGER NOT NULL DEFAULT 1,
  "firstHeatDate" TIMESTAMP(3),
  "sireCode" TEXT,
  "aiType" TEXT,
  "aiSource" TEXT,
  "aiCost" DOUBLE PRECISION,
  "gestationDays" INTEGER NOT NULL,
  "expectedBirthDate" TIMESTAMP(3) NOT NULL,
  "birthRecorded" BOOLEAN NOT NULL DEFAULT false,
  "birthDate" TIMESTAMP(3),
  "deliveryMethod" TEXT,
  "youngOnes" INTEGER,
  "birthWeight" DOUBLE PRECISION,
  "litterWeight" DOUBLE PRECISION,
  "offspringSex" TEXT,
  "farmId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "BreedingRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offspring" (
  "id" TEXT NOT NULL,
  "breedingRecordId" TEXT NOT NULL,
  "livestockId" TEXT,
  "offspringId" TEXT NOT NULL,
  "sex" TEXT NOT NULL,
  "birthWeight" DOUBLE PRECISION,
  "notes" TEXT,
  "status" TEXT NOT NULL DEFAULT 'alive',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Offspring_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BreedingRecord" ADD CONSTRAINT "BreedingRecord_damId_fkey" FOREIGN KEY ("damId") REFERENCES "Livestock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedingRecord" ADD CONSTRAINT "BreedingRecord_sireId_fkey" FOREIGN KEY ("sireId") REFERENCES "Livestock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedingRecord" ADD CONSTRAINT "BreedingRecord_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offspring" ADD CONSTRAINT "Offspring_breedingRecordId_fkey" FOREIGN KEY ("breedingRecordId") REFERENCES "BreedingRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offspring" ADD CONSTRAINT "Offspring_livestockId_fkey" FOREIGN KEY ("livestockId") REFERENCES "Livestock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
