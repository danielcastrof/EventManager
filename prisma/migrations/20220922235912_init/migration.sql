-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(8000) NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL,
    "dateProgram" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "People" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "peopleName" TEXT NOT NULL,
    "agregados" INTEGER NOT NULL,

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "ItemName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "People" ADD CONSTRAINT "People_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
