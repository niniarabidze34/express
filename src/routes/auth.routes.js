const { register, login } = require('../controller/auth.contoller');
const validator = require('../validators/authValidators')

const router = require('express').Router();

router.post('/register',validator.validateRegister, register)
router.post('/login', validator.validateLogin, login)

module.exports = router