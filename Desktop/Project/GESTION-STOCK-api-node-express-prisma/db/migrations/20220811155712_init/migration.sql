-- CreateTable
CREATE TABLE `client` (
    `numClient` INTEGER NOT NULL AUTO_INCREMENT,
    `nomClient` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`numClient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commande` (
    `numCommande` INTEGER NOT NULL AUTO_INCREMENT,
    `numClient` INTEGER NOT NULL,
    `numProduit` INTEGER NOT NULL,
    `qte` INTEGER NOT NULL,
    `dateCommande` DATETIME(0) NOT NULL,

    INDEX `numClient`(`numClient`),
    INDEX `numProduit`(`numProduit`),
    PRIMARY KEY (`numCommande`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produit` (
    `numProduit` INTEGER NOT NULL AUTO_INCREMENT,
    `designProduit` VARCHAR(255) NOT NULL,
    `puProduit` VARCHAR(255) NOT NULL,
    `stockProduit` INTEGER NOT NULL,

    PRIMARY KEY (`numProduit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`numClient`) REFERENCES `client`(`numClient`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`numProduit`) REFERENCES `produit`(`numProduit`) ON DELETE CASCADE ON UPDATE CASCADE;
