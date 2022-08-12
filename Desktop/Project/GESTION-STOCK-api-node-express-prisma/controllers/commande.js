import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { commande, produit } = prisma

export const getAll = (req, res) => {
    commande
        .findMany()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving commandes',
            })
        })
}

export const get = (req, res) => {
    const { id } = req.params

    commande
        .findUnique({ where: { numCommande: parseInt(id) } })
        .then((data) => {
            data
                ? res.status(200).send(data)
                : res.status(404).send({
                      message: `Cannot find commande with id=${id}`,
                  })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while retrieving the commande with id=${id}`,
            })
        })
}

export const create = (req, res) => {
    const { numClient, numProduit, qte } = req.body
    const dateCommande = new Date()

    commande
        .create({
            data: {
                numClient: parseInt(numClient),
                numProduit: parseInt(numProduit),
                qte: parseInt(qte),
                dateCommande: dateCommande,
            },
        })
        .then((data) => {
            res.status(201).send(data)
        })
        .then(() => {
            produit
                .update({
                    where: {
                        numProduit: parseInt(numProduit),
                    },
                    data: {
                        stockProduit: {
                            decrement: parseInt(qte),
                        },
                    },
                })
                .then((data) => {
                    res.status(200).send(data)
                })
                .catch((error) => {
                    res.status(500).send({
                        message: error.message || `Some error occurred while updating the produit stock`,
                    })
                })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while creating the commande',
            })
        })
}

export const update = (req, res) => {
    const { numClient, numProduit, qte } = req.body
    const { id } = req.params
    const dateCommande = new Date()

    commande
        .update({
            where: {
                numCommande: parseInt(id),
            },
            data: {
                numClient: parseInt(numClient),
                numProduit: parseInt(numProduit),
                qte: parseInt(qte),
                dateCommande: dateCommande,
            },
        })
        .then(() => {
            res.status(200).send({
                message: 'Produit was updated successfully',
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while updating the commande with id=${id}`,
            })
        })
}

export const remove = (req, res) => {
    const { idCommande, idProduit, qteProduit } = req.params

    produit
        .update({
            where: {
                numProduit: parseInt(idProduit),
            },
            data: {
                stockProduit: {
                    increment: parseInt(qteProduit),
                },
            },
        })
        .then(() => {
            commande
                .delete({
                    where: {
                        numCommande: parseInt(idCommande),
                    },
                })
                .then(() => {
                    res.status(200).send({
                        message: 'Commande was deleted successfully',
                    })
                })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while deleting the commande`,
            })
        })
}
