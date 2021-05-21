const express = require('express')
const app = express()

app(express.urlencoded())

app.post('/form', (req, res) => {
    const name = req.body.name
})

res.sendStatus(200)
// === res.status(200).send('OK')

res.sendStatus(403)
// === res.status(403).send('Forbidden')


res.status(404).send('file not found')

res.sendStatus(500)
// === res.status(500).send('Internal Server Error')
