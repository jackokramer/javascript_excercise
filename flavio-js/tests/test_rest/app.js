const request = require('supertest')
const app = require('../app')

app.emit('appStarted')

const server = app.listen(3000, ()=>{
    console.log('server ready')
})

app.on('closeApp',()=> server.close())

const { expect } = require('chai')
const { describe } = require('mocha')


module.exports = app