-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`numClient`) REFERENCES `client`(`numClient`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`numProduit`) REFERENCES `produit`(`numProduit`) ON DELETE CASCADE ON UPDATE CASCADE;
