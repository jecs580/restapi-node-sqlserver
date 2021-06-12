import {Router} from 'express'
import {createNewProduct, deleteProductById, getProductById, getProducts} from '../controllers/products.controller'

const router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', createNewProduct)
router.delete('/products/:id',deleteProductById )
router.put('/products',)

export default router;