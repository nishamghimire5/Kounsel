/*
  Warnings:

  - Added the required column `approved` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "email" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "approved" TEXT NOT NULL
);
INSERT INTO "new_Booking" ("date", "email", "message") SELECT "date", "email", "message" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
CREATE UNIQUE INDEX "Booking_email_key" ON "Booking"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
