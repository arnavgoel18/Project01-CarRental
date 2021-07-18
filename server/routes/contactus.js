const contact=require('../controllers/contact')
const express= require("express");

const router= express.Router();

router.post('/contactus', contact.contactus)

module.exports= router;