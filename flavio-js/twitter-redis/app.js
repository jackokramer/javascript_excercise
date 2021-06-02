const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

const path = require('path')

//Redis feature
const redis = require('redis')
const client = redis.createClient()


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => res.render("index"));
app.listen(3000, ()=> console.log('Sever ready'))

app.post("/", (req, res) =>{
    const {username, password} = req.body

    //user name exists check if
    client.hget("users", username, (err,userid)=>{
        if(!userid){
            //if the user does not exist, signup procedure will
            client.incr('userid', async(err, userid)=>{
                client.hset('users', username, userid)
                const hash = await bcrypt.hash(password, saltRounds)
                client.hset(`user:${userid}`, 'hash', hash, 'username', username)
            })
        } else {
            //user exists start login procedure
        }
    })
    //username password are not entered fire this
    if(!username || !password){
        res.render('error', {
            message: 'Please set a password and a username'
        })
        return
    }
    console.log(req.body, username, password)
    res.end()
})