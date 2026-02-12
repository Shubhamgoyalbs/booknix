/*
  Warnings:

  - The values [CANCELLED] on the enum `TransactionStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `walletId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Event` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `TicketType` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `currency` on the `Transaction` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[eventId,organizerId]` on the table `EventTicketChecker` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expiresAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalAmount` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformFee` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `BookingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `BookingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketTypeId` to the `BookingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BookingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `EventTicketChecker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizerId` to the `EventTicketChecker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `EventTicketChecker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `LockedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `LockedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LockedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `LockedTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lockedItemId` to the `LockedTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `LockedTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketTypeId` to the `LockedTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LockedTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'EXPIRED', 'REFUNDED');

-- AlterEnum
BEGIN;
CREATE TYPE "TransactionStatus_new" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');
ALTER TABLE "public"."Transaction" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Transaction" ALTER COLUMN "status" TYPE "TransactionStatus_new" USING ("status"::text::"TransactionStatus_new");
ALTER TYPE "TransactionStatus" RENAME TO "TransactionStatus_old";
ALTER TYPE "TransactionStatus_new" RENAME TO "TransactionStatus";
DROP TYPE "public"."TransactionStatus_old";
ALTER TABLE "Transaction" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_walletId_fkey";

-- DropIndex
DROP INDEX "Account_walletId_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "walletId";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "couponId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finalAmount" INTEGER NOT NULL,
ADD COLUMN     "platformFee" INTEGER NOT NULL,
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "totalAmount" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BookingItem" ADD COLUMN     "bookingId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "ticketTypeId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "currency";

-- AlterTable
ALTER TABLE "EventTicketChecker" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "eventId" TEXT NOT NULL,
ADD COLUMN     "organizerId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "LockedItem" ADD COLUMN     "bookingId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isReleased" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "LockedTicket" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "lockedItemId" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "ticketTypeId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TicketType" ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "currency",
ADD COLUMN     "bookingId" TEXT,
ALTER COLUMN "amount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "accountId" TEXT NOT NULL,
ADD COLUMN     "cashback" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "refunds" INTEGER NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "Currency";

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "minPurchase" INTEGER NOT NULL,
    "maxDiscount" INTEGER NOT NULL,
    "usageLimit" INTEGER NOT NULL,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizerFollow" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "organizerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrganizerFollow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventSubscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventBookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OrganizerFollow_organizerId_idx" ON "OrganizerFollow"("organizerId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizerFollow_userId_organizerId_key" ON "OrganizerFollow"("userId", "organizerId");

-- CreateIndex
CREATE INDEX "EventSubscription_eventId_idx" ON "EventSubscription"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "EventSubscription_userId_eventId_key" ON "EventSubscription"("userId", "eventId");

-- CreateIndex
CREATE INDEX "EventBookmark_eventId_idx" ON "EventBookmark"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "EventBookmark_userId_eventId_key" ON "EventBookmark"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "EventTicketChecker_eventId_organizerId_key" ON "EventTicketChecker"("eventId", "organizerId");

-- CreateIndex
CREATE INDEX "LockedItem_expiresAt_idx" ON "LockedItem"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_accountId_key" ON "Wallet"("accountId");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItem" ADD CONSTRAINT "BookingItem_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingItem" ADD CONSTRAINT "BookingItem_ticketTypeId_fkey" FOREIGN KEY ("ticketTypeId") REFERENCES "TicketType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LockedItem" ADD CONSTRAINT "LockedItem_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LockedTicket" ADD CONSTRAINT "LockedTicket_ticketTypeId_fkey" FOREIGN KEY ("ticketTypeId") REFERENCES "TicketType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LockedTicket" ADD CONSTRAINT "LockedTicket_lockedItemId_fkey" FOREIGN KEY ("lockedItemId") REFERENCES "LockedItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTicketChecker" ADD CONSTRAINT "EventTicketChecker_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTicketChecker" ADD CONSTRAINT "EventTicketChecker_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizerFollow" ADD CONSTRAINT "OrganizerFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizerFollow" ADD CONSTRAINT "OrganizerFollow_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSubscription" ADD CONSTRAINT "EventSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSubscription" ADD CONSTRAINT "EventSubscription_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventBookmark" ADD CONSTRAINT "EventBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventBookmark" ADD CONSTRAINT "EventBookmark_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
