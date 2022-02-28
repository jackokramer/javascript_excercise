const express = require('express')
const app = express()

app.use(express.json())

app.get('/dogs/:id', (res, req)=>{/**retrieve info */
    const dogs =[]
    dogs.push({name: 'syd'})
    dogs.push({name: 'Blue'})
    res.json(dogs)
    if(res.status === 200){
        console.log(res.body)
    } else {
        res.status = 404
        res.send('dog not found')
    }
})
//post needs to fetch an api first in order to add data to it.
fetch(baseurl + '/dog', {
    "method": "POST",
    "headers": {
         'content-type': 'application/json',
    },
    "body": {
        "name": "roger",
        "age": 8
    }
})
app.post('/dog', (req, res)=>{/** insert new information */
    const dog ={
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }
})

app.put('/dog/:id', (req, res)=>{ /**updates a small snippet of info unlike post so we can change age property for the object */
    const dog ={
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }

})


app.delete('/', (res, req)=>{/**retrienve info */})
app.patch('/dog/:id', (req, res)=>{/**retrienve info */
    const age = req.body.age
})

app.listen(3000, ()=>('server ready'))