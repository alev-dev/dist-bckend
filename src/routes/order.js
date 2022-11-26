const { Router } = require('express');
const router = Router();
const { createOrder, getOrder, getOrders, getOrdersByUser, updateOrder, deleteOrder } = require('../controllers/order');

router.get('/:id', getOrder);
router.get('/', getOrders);
router.get('/user/:id', getOrdersByUser);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
