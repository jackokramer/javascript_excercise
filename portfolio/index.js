const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

//MongDB
/*
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const db = client.db('user info')

mongo.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client)=>{
    if(err){
        console.err(err)
        return
    }
})
*/

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open')
    })
})

////////////////////////////////////////////////////////////////

//