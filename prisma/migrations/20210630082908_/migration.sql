/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User.password_unique";

-- DropIndex
DROP INDEX "User.pseudo_unique";

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
