const express = require('express')
const app = express()

app.use(express.urlencoded())

app.get('/', (req, res) => res.send('Hola'))

res.json({username: 'Flavio'})