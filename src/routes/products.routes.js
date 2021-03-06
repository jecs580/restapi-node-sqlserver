import {Router} from 'express'
import {countProducts, createNewProduct, deleteProductById, getProductById, getProducts, updateProductById} from '../controllers/products.controller'

const router = Router()

router.get('/products', getProducts)
router.get('/products/count', countProducts)
router.get('/products/:id', getProductById)
router.post('/products', createNewProduct)
router.delete('/products/:id',deleteProductById )
router.put('/products/:id',updateProductById)

export default router;