const express = require('express');
const { getUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

// User routes
router.get('/users/', getUsers);
router.get('/users/:id', getUserById);

module.exports = router;