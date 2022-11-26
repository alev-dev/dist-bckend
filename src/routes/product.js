const { Router } = require('express');
const router = Router();
const {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
    getProductsByCategory,
} = require('../controllers/product');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/category/:category', getProductsByCategory);

module.exports = router;
