const { Router } = require('express');
const router = Router();
const {
    createOrder,
    getOrder,
    getOrders,
    getOrdersByUser,
    updateOrder,
    deleteOrder,
    getOrderLast24Hours,
    getProductsMoreSoldWithImage,
} = require('../controllers/order');

router.get('/:id', getOrder);
router.get('/', getOrders);
router.get('/user/:id', getOrdersByUser);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.get('/est/last24hours', getOrderLast24Hours);
router.get('/est/products/moreSold', getProductsMoreSoldWithImage);

module.exports = router;
