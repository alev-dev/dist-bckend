const { Router } = require('express');
const router = Router();
const { getUsers, getUser, createUser, updateUser, deleteUser, login } = require('../controllers/user');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/authentication', login);
module.exports = router;
