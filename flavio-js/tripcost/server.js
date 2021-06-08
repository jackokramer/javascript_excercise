const express = require('express')
const mongo = require('mongo').MongoClient

const url = "mongodb://localhost:27017"

const app= express()

let db
mongo.connect(
    url,
    {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) =>{
        if(err){
            console.error(err)
            return
        }
        db= client.db('tripcost')
    }
)

let db, trips, expenses

mongo.connect(
    url,
    {
        userNewParsers: true,
        useUnifiedTopology: true,
    },
    (err, client) =>{
        if(err){
            console.log(err)
            return
        }
        db = client.db('tripcost')
        trips = db.collection('trips')
        expenses = db.collection('expenses')
    }
)

app.post("/trip", (res, req)=>{
    /** */
})

app.get("/trips", (res, req)=>{
    /** */
})

app.post("/trips", (res, req)=>{
    /** */
})

app.get("/expenses", (res, req)=>{
/** */
})

app.listen(3000, ()=> console.log("server ready"))