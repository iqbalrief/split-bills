const express = require('express')
//assigning the variable app to express
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')
const router = require("./routes")

//setting up your port
const PORT = process.env.PORT




//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api", router);
//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))


module.exports = app;