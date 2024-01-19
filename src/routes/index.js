const usersRouter = require('./user.router')

const express = require('express');
const router = express.Router();

router.use(usersRouter)


module.exports = router;