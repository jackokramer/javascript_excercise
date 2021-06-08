const express = require('express')
const mongo = require('mongodb').MongoClient

const url = "mongodb://localhost:27017"

const app= express()

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
    const name = req.body.name
    trips.insetOne({name:name}, (err, result)=>{
        if(err){
            console.error(err)
            res.status(500).json({err:err})
            return
        }
        console.log(result)
        res.status(200).json({ok: true})
    })
})

app.get("/trips", (res, req)=>{
    trips.find().toArray((err,items)=>{
        if(err){
            console.error(err)
            res.status(500).json({err:err})
            return
        }
        res.status(200).json({trips:items})
    })
})

app.post("/trips", (res, req)=>{
    expenses.insetOne({
        trip: req.body.trip,
        date: req.body.date,
        amount: req.body.amount,
        category: req.body.category,
        description: req.body.description,
    },
    (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({err: err})
            return
        }
        res.status(200).json({ok: true})
    }
    )
})

app.get("/expenses", (res, req)=>{
    expenses.find({trip: req.body.trip}).toArray((err, items)=>{
        if(err){
            console.error(err)
            res.status(500).json({err: err})
            return
        }
        res.status(200).json({expenses: items})
    })
})

app.listen(3000, ()=> console.log("server ready"))