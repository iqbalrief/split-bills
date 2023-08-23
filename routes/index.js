const express = require('express');
const router = express.Router();
const userRouter = require("./Users.Routes")

router.use("/auth", userRouter)




module.exports = router;