/*
  Warnings:

  - You are about to drop the column `creditedAccountId` on the `Accounts` table. All the data in the column will be lost.
  - You are about to drop the column `debitedAccountId` on the `Accounts` table. All the data in the column will be lost.
  - Added the required column `creditedAccountId` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debitedAccountId` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Accounts" DROP CONSTRAINT "Accounts_creditedAccountId_fkey";

-- DropForeignKey
ALTER TABLE "Accounts" DROP CONSTRAINT "Accounts_debitedAccountId_fkey";

-- AlterTable
ALTER TABLE "Accounts" DROP COLUMN "creditedAccountId",
DROP COLUMN "debitedAccountId";

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "creditedAccountId" INTEGER NOT NULL,
ADD COLUMN     "debitedAccountId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_debitedAccountId_fkey" FOREIGN KEY ("debitedAccountId") REFERENCES "Accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_creditedAccountId_fkey" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
