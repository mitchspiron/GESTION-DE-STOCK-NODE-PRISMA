import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { client } = prisma

export const getAll = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    client
        .findMany({
            orderBy: [
                {
                    numClient: 'desc',
                },
            ],
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving clients',
            })
        })
}

export const get = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params

    client
        .findUnique({ where: { numClient: parseInt(id) } })
        .then((data) => {
            data
                ? res.status(200).send(data)
                : res.status(404).send({
                      message: `Cannot find client with id=${id}`,
                  })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while retrieving the client with id=${id}`,
            })
        })
}

export const create = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { nomClient } = req.body

    client
        .create({
            data: {
                nomClient: nomClient,
            },
        })
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while creating the client',
            })
        })
}

export const update = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params
    const { nomClient } = req.body

    client
        .update({
            where: {
                numClient: parseInt(id),
            },
            data: {
                nomClient: nomClient,
            },
        })
        .then(() => {
            res.status(200).send({
                message: 'Client was updated successfully',
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while updating the client with id=${id}`,
            })
        })
}

export const remove = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params

    client
        .delete({
            where: {
                numClient: parseInt(id),
            },
        })
        .then(() => {
            res.status(200).send({
                message: 'Client was deleted successfully',
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while deleting the client with id=${id}`,
            })
        })
}

export const getChiffreAffaire = async (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params
    await prisma.$queryRaw`SELECT client.numClient, client.nomClient, (SELECT SUM(commande.qte*produit.puProduit) AS total FROM commande, produit WHERE commande.numProduit = produit.numProduit AND commande.numClient = ${id}) AS totale FROM client WHERE client.numClient = ${id}`
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving making getChiffreAffaire',
            })
        })
}

export const getClientWithProduitBetweenDate = async (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { nomClient, dateA, dateB } = req.body
    await prisma.$queryRaw`SELECT client.nomClient, produit.designProduit, commande.dateCommande FROM client, produit, commande WHERE client.numClient = commande.numClient AND produit.numProduit = commande.numProduit AND client.nomClient LIKE ${nomClient} AND commande.dateCommande BETWEEN ${dateA} AND ${dateB}`
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving making getClientWithProduitBetweenDate',
            })
        })
}

export const getClientWithCA = async (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    await prisma.$queryRaw`SELECT client.numClient, client.nomClient, SUM(commande.qte*produit.puProduit) AS total FROM commande, produit, client WHERE commande.numProduit = produit.numProduit AND commande.numClient = client.numClient GROUP BY client.numClient ORDER BY client.numClient`
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving making getClientWithProduitBetweenDate',
            })
        })
}
