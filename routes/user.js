const UserController = require('../controller/register_controller');

const express = require('express');

const router = express.Router();

router.post('/register',UserController);

module.exports = router;