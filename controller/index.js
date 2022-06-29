const { Router } = require('express');
const { getLoginPage } = require('./login');
const router = Router();


router.get('/login', getLoginPage);


module.exports = router;