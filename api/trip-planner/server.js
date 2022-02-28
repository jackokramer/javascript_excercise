const express = require('express')
const mongo = require('mongodb').MongoClient

const app = express()

const url = "mongodb://localhost:27017"

app.post("/trip", (req, res) => {
    const name = req.body.name
    trips.inserOne({name: name}, (err, result) => {
        if(err){
            console.error(err)
            res.status(500).json({err:err})
            return
        }
        conso.log(result)
        res.status(200).json({ok: true})
    })
})

app.get('/trips', (req, res) => {
    trips.find().toArray((err, items)=>{
        if(err){
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({trips: items})
    })
})

app.post("/expense", (req, res) => {
    //
    expenses.inserOne(
        {
            trip: req.body.trip,
            date: req.body.date,
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
        },
        (err, result)=>{
            if(err){
                console.log(err)
                res.status(500). json({err:err})
                return
            }
            res.status(200).json(({ok: true}))
        }
    )
})

app.get('/expenses', (req, res)=>{
    expenses.find({trip: req.body.trip}).toArray((err, items)=>{
        if(err){
            console.log(err)
            res.status(500).json({err: err})
            return
        }
        res.status(200).json({expenses:items})
    })
})

let db, trips, expenses

mongo.connect(
    url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client)=>{
        if(err){
            console.log(err)
            return
        }
        db = client.db('tripcost')
        trips = db.collection('trips')
        expenses = db.collection('expenses')
    }
)

app.use(express.json())

app.listen(3000, ()=> console.log('server running'))