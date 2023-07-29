const router = require('express').Router();

const AuthRoutes = require('./auth.routes');
const checkAuth = require('../middlewares/checkAuth.middleware');


router.use('/auth', AuthRoutes);

router.use(checkAuth)

router.use()


module.exports = router;