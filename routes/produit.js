import express from 'express'
const router = express.Router()

import { getAll, get, create, update, remove } from '../controllers/produit'

router.get('/', getAll)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
