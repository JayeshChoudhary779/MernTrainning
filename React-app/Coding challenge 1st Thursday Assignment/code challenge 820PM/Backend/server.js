const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')

const url = 'mongodb://localhost:27017/codingChallenge'

const app = express()

mongoose.connect(url, {useNewUrlParser:true}, {useUnifiedTopology:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(cors())

const filmRouter = require('./routes/filmrouter')
const directorRouter = require('./routes/directorrouter')
app.use('/app/film',filmRouter)
app.use('/app/director',directorRouter)

app.listen(4555, () => {
    console.log('Server started')
})