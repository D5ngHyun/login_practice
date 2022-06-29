const { Router } = require('express');
const { getLoginPage } = require('./login'); 
const { getRegisterPage, postRegitser } = require('./register');
const multer = require('multer');
const upload = multer();


const router = Router();

// Login
router.get('/login', getLoginPage);

// Register
router.get('/register', getRegisterPage);
router.post('/register', upload.array(), postRegitser);


module.exports = router;