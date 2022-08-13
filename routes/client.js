import express from 'express'
const router = express.Router()

import {
    getAll,
    get,
    create,
    update,
    remove,
    getChiffreAffaire,
    getClientWithProduitBetweenDate,
} from '../controllers/client'

router.get('/', getAll)
router.get('/ca/:id', getChiffreAffaire)
router.get('/ca', getClientWithProduitBetweenDate)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
