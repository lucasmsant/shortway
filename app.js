const express = require('express')
require('dotenv').config();
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

// dados do mongodb
const mongoUser = process.env.mongoUser
const mongoPass = process.env.mongoPass
const mongoCluster = process.env.mongoCluster
const mongoDatabase = process.env.mongoDatabase

// conexão com o mongodb
mongoose.connect('mongodb+srv://'+mongoUser+':'+mongoPass+'@'+mongoCluster+'/'+mongoDatabase+'?retryWrites=true&w=majority')
.then(() => {
  console.log("Conexão OK");
}).catch(() => {
  console.log("Conexão NOK");
})

const app = express()
const port = process.env.PORT || 5000

const estabelecimento = require('./routes/estabelecimentoRota')

app.use(cors())

app.use(bodyParser.json())

app.use('/estabelecimento', estabelecimento)

app.get('/', (req, res) => {
    res.send('Futura Home')
})

app.listen(port, () => {
    console.log('server listening on port ' + port)
})