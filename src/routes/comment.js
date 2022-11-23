const { Router } = require('express');
const router = Router();
const { createComment, getComment, getCommentsByProduct } = require('../controllers/comment');

router.get('/:id', getComment);
router.post('/', createComment);
router.get('/product/:id', getCommentsByProduct);

module.exports = router;
