
const express=require('express');
const router=express.Router();
const usercontroller=require('../controller/userController');


router.post('/register',usercontroller.regiforusernamecheck);
router.post('/login',usercontroller.userlogin);
module.exports=router;
