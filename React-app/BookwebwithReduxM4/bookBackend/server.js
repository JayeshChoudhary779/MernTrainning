const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')

const url = 'mongodb://localhost:27017/Bookweb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true}, {useUnifiedTopology:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(cors())
const bookRouter = require('./routes/router')
app.use('/app',bookRouter)

app.listen(4555, () => {
    console.log('Server started')
})