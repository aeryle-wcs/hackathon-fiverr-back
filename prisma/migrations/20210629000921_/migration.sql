/*
  Warnings:

  - A unique constraint covering the columns `[pseudo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User.pseudo_unique" ON "User"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "User.password_unique" ON "User"("password");
