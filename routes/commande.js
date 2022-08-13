import express from 'express'
const router = express.Router()

import { getAll, get, create, update, remove } from '../controllers/commande'

router.get('/', getAll)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.delete('/:idCommande/:idProduit/:qteProduit', remove)

export default router
