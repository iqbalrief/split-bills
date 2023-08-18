const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')

//setting up your port
const PORT = process.env.PORT

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))