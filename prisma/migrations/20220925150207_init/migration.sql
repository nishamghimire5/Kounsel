-- CreateTable
CREATE TABLE "Booking" (
    "email" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_email_key" ON "Booking"("email");
