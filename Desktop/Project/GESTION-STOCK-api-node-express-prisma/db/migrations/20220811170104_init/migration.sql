/*
  Warnings:

  - You are about to alter the column `puProduit` on the `produit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- AlterTable
ALTER TABLE `produit` MODIFY `puProduit` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`numClient`) REFERENCES `client`(`numClient`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`numProduit`) REFERENCES `produit`(`numProduit`) ON DELETE CASCADE ON UPDATE CASCADE;
