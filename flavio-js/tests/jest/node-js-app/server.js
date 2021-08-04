const express = require('express')
const mongo = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"

const app = express()
app.use(express.json())

let db, trips, expenses

mongo.connect(url,
    {
        useUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if(err) {
            console.error(err)
            return
        }
        db= client.db('tripcost')
        trips = db.collection('trips')
        expenses = db.collection('expenses')
    }
    )

app.post('/trip', (res,req) => {
    const name = req.body.name
    trips.insetOne({name: name}, (err, result) => {
        if(err){
            console.log(err)
            res.status(500).json({err:err.message})
            return
        }
        res.status(200).json({ok:true})
    })
})

app.get("/trips", (req, res) => {
    trips.find().toArray((err, items)=>{
        if(err){
            console.log(err)
            res.status(500).json({err: err})
            return
        }
        res.status(200).status({trips: items})
    })
})

app.post("/expense", (req,res)=>{
    expenses.insetOne(
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
                res.status(500).json({err: err})
                return
            }
            res.status(200).json({ok: true})
        }
    )
})

app.get("/expenses", (req, res) => {
    expenses.find({trip: req.body.trip}).toArray((err, items) => {
        if(err){
            console.log(err)
            res.status(500).json({err: err})
            return
        }
        res.status(200).json({expenses: items})
    })
})

app.listen(3000, ()=> console.log("server ready"))