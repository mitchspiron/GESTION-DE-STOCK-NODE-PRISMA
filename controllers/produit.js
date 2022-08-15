import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { produit } = prisma

export const getAll = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    produit
        .findMany()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving produits',
            })
        })
}

export const get = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params

    produit
        .findUnique({ where: { numProduit: parseInt(id) } })
        .then((data) => {
            data
                ? res.status(200).send(data)
                : res.status(404).send({
                      message: `Cannot find produit with id=${id}`,
                  })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while retrieving the produit with id=${id}`,
            })
        })
}

export const create = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { designProduit, puProduit, stockProduit } = req.body

    produit
        .create({
            data: {
                designProduit: designProduit,
                puProduit: parseInt(puProduit),
                stockProduit: parseInt(stockProduit),
            },
        })
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while creating the produit',
            })
        })
}

export const update = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params
    const { designProduit, puProduit, stockProduit } = req.body

    produit
        .update({
            where: {
                numProduit: parseInt(id),
            },
            data: {
                designProduit: designProduit,
                puProduit: parseInt(puProduit),
                stockProduit: parseInt(stockProduit),
            },
        })
        .then(() => {
            res.status(200).send({
                message: 'Produit was updated successfully',
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while updating the produit with id=${id}`,
            })
        })
}

export const remove = (req, res) => {
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }
    const { id } = req.params

    produit
        .delete({
            where: {
                numProduit: parseInt(id),
            },
        })
        .then(() => {
            res.status(200).send({
                message: 'Produit was deleted successfully',
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Some error occurred while deleting the produit with id=${id}`,
            })
        })
}
