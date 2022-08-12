import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { client } = prisma

export const getAll = (req, res) => {
    client
        .findMany()
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
