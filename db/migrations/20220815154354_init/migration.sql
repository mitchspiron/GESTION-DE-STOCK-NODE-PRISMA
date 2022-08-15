/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `commande` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produit` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    MODIFY `numClient` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`numClient`);

-- AlterTable
ALTER TABLE `commande` DROP PRIMARY KEY,
    MODIFY `numCommande` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `numClient` BIGINT NOT NULL,
    MODIFY `numProduit` BIGINT NOT NULL,
    MODIFY `qte` BIGINT NOT NULL,
    ADD PRIMARY KEY (`numCommande`);

-- AlterTable
ALTER TABLE `produit` DROP PRIMARY KEY,
    MODIFY `numProduit` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `puProduit` BIGINT NOT NULL,
    MODIFY `stockProduit` BIGINT NOT NULL,
    ADD PRIMARY KEY (`numProduit`);

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`numClient`) REFERENCES `client`(`numClient`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`numProduit`) REFERENCES `produit`(`numProduit`) ON DELETE CASCADE ON UPDATE CASCADE;
