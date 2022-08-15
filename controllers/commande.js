import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { commande, produit } = prisma

/* export const getAll = (req, res) => {
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
} */

export const getAll = async (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    await prisma.$queryRaw`SELECT numCommande, client.numClient, client.nomClient, produit.numProduit, produit.designProduit, produit.puProduit, commande.qte, (commande.qte*produit.puProduit) AS total, commande.dateCommande FROM commande, client, produit WHERE commande.numProduit = produit.numProduit AND commande.numClient = client.numClient`
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while getting commande list',
            })
        })
}

export const get = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
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

export const create = async (req, res) => {
    try {
        BigInt.prototype.toJSON = function () {
            return this.toString()
        }
        const { numClient, numProduit, qte } = req.body
        const dateCommande = new Date()
        const createCommande = await commande.create({
            data: {
                numClient: parseInt(numClient),
                numProduit: parseInt(numProduit),
                qte: parseInt(qte),
                dateCommande: dateCommande,
            },
        })
        const updateProduit = await produit.update({
            where: {
                numProduit: parseInt(numProduit),
            },
            data: {
                stockProduit: {
                    decrement: parseInt(qte),
                },
            },
        })
        res.status(200).json({ createCommande, updateProduit })
    } catch (error) {
        res.status(404).json({ error })
    }
}

export const update = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
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

export const remove = async (req, res) => {
    try {
        BigInt.prototype.toJSON = function () {
            return this.toString()
        }
        const { idCommande, idProduit, qteProduit } = req.params
        const updateProduit = await produit.update({
            where: {
                numProduit: parseInt(idProduit),
            },
            data: {
                stockProduit: {
                    increment: parseInt(qteProduit),
                },
            },
        })
        const removeCommande = await commande.delete({
            where: {
                numCommande: parseInt(idCommande),
            },
        })
        res.status(200).json({ updateProduit, removeCommande })
    } catch (error) {
        res.status(404).json({ error })
    }
}
