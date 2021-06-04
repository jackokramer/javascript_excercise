const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

const path = require('path')

//Redis feature
const redis = require('redis')
const client = redis.createClient()
//Bcrypt features
const bcrypt = require('bcrypt')
//session
const session = require('express-session')
const RedisStore = require('connect-redis')(session)


app.use(
    session({
        store: new RedisStore({client: client}),
        resave: true,
        saveUninitialized: true,
        cookie:{
            maxAge: 350000,
            httpOnly: false,
            secure: false,
        },
        secret:'bM80SARb1tma3rksWhulfNSeUFURWLTY8vyf',
    })
)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => {
    if(req.session.userid){
        res.render('dashboard')
    } else {
        res.render('login')
    }
});
app.listen(3000, ()=> console.log('Sever ready'))

app.post("/", (req, res) =>{
    const {username, password} = req.body

    //username password are not entered fire this
    if(!username || !password){
        res.render('error', {
            message: 'Please set a password and a username'
        })
        return
    }
    console.log(req.body, username, password)

    const saveSessionAndRenderDashboard = (userid) =>{
    req.session.userid = userid
    req.session.save()
    res.render('dashboard')
}

    //user name exists check if
    client.hget("users", username, (err,userid)=>{
        if(!userid){
            //if the user does not exist, signup procedure will
            client.incr('userid', async(err, userid)=>{
                client.hset('users', username, userid)
                const saltRounds = 10
                const hash = await bcrypt.hash(password, saltRounds)
                client.hset(`user:${userid}`, 'hash', hash, 'username', username)
                saveSessionAndRenderDashboard(userid)
            })
        } else {
            //user exists start login procedure
            client.hget(`user:${userid}`, 'hash', async(err, hash)=>{
                const result = await bcrypt.compare(password, hash)
                if(result){
                    saveSessionAndRenderDashboard(userid)
                    //password ok
                } else {
                    res.render('error', {
                        message: 'Incorrect Password'
                    })
                    return
                }
            })
        }
    })
})