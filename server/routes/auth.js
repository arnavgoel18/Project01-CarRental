const express= require("express");
const authController= require("../controllers/auth");
const validateToken=require('../middlewares/authMid')

const router= express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/auth', validateToken);

module.exports= router;