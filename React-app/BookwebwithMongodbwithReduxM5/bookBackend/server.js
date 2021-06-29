const env =require("dotenv");
const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')

env.config();
const url = `mongodb://${process.env.HOST}/${process.env.DB_USER}`

const app = express()

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(cors())

const bookRouter = require('./routes/bookRouter')
const userRouter = require('./routes/userRouter')

app.use('/app',bookRouter)
app.use('/app',userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`)
})