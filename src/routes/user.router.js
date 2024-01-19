const { getAll, createUser } = require('../controllers/user.controllers');
const express = require('express');
const upload = require('../utils/multer');

const router = express.Router();

router.route('/users')
    .get(getAll)
    .post(upload.single('photo'), createUser)

module.exports = router;