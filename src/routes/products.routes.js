import {Router} from 'express'
import {getProducts} from '../controllers/products.controller'

const router = Router()

router.get('/products', getProducts)
router.get('/products', getProducts)
router.post('/products', )
router.delete('/products', )
router.put('/products',)

export default router;