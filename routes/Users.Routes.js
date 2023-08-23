const express = require('express');
const router = express.Router();
const {saveToken, verifySignUp} = require("../middleware");
const indexCtrl = require("../controllers/index.Controller");


router.post("/signup", verifySignUp.checkDuplicateUsernameOrEmail, indexCtrl.UserCtrl.signUp);
router.post("/signin", indexCtrl.UserCtrl.signIn);



module.exports = router