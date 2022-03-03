require('dotenv').config()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes');

const connectDB = require('./connectDB/connection')

connectDB()







const app = express()

const PORT = process.env.PORT || 5500;
app.use(cors())
app.use(bodyParser.json( { extended: true }))
app.use(bodyParser.urlencoded( { extended: true }))
app.use(express.json())
app.use(router)









app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})