const express = require('express')
const app = express()

app.listen(3000,() =>console.log('server ready'))

app.use(express.urlencoded({extend:true}))
app.use(express.json)


app.get('/dogs/:id', (req, res) =>{/** catchall method with :id*/
    const dogs = [{
        id: 1,
        name: 'Frederick'
    }]
    const dog = dogs.filter(dog => dog.id == req.params.id)
    if(dog.length){
        res.json(dog[0])
    } else {
        res.status(404).send('Dog not found')
    }
    dogs.push({name: 'Jesse'})
    dogs.push({name: 'Paul'})
    res.json(dogs)
    res.status(500)
    res.send('Internal sever error')
    res.status(201).send('dog activated')
    res.status(404)
    res.send('Dog not found')
})

app.post('/dog', (req, res) =>{/** First Parameter is the path*/
        fetch(baseurl + '/dog',{
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "body":{
            "name": "Roget",
            "age": 9
        }
    })
        fetch(baseurl + '/dog',{
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
        },
        "body":{
            "name": "Roget",
            "age": 9
        }
    })
    const dog = {
        name:  req.body.name,
        age: req.body.age
    }
    //dog data can go here and we move on
})
app.put('/dog/:id', (req, res) =>{/**
*/
    const dog = {
        name: req.body.name,
        age: req.body.age
    }
    // we have the new dog data we can update it.
})
app.delete('/dog/:id', (req, res) =>{/** */
    res.status(200).send("okie doke")
})
app.patch("/dog/:id", (req, res) =>{/**
 */
    const age = req.body.age
})

app.use(express.urlencoded({extend:true}))