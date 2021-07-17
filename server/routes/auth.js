const express= require("express");
const authController= require("../controllers/auth");
const contact=require('../controllers/contact')
const router= express.Router();

router.post('/contactus', contact.contactus)
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports= router;