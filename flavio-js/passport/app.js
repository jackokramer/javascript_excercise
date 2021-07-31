const express = require('express')
const app = express()
const User = require("./user.js")
const path = require('path')
//session variables
const passport = require('passport')
const session = require('express-session')

app.set("view engine", "pug")
app.set('views', path.join(__dirname, 'views'))
const LocalStrategy = require('passport-local').Strategy

const sequlize = require('./database.js')

const User = require('./user.js')
User.sync({ alter: true })

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sessionStore = new SequelizeStore({
    db: sequelize,
})
sessionStore.sync()

passport.serializeUser((user, done) => {
  done(null, user.email)
})

passport.deserializeUser((email, done) => {
  User.findOne({ where: { email: email } }).then((user) => {
    done(null, user)
  })
})

.passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async function(email, password, done){
            if(!email || password){
                done('Email required as well as password', null)
                return
            }
            const user = await User.findOne({where: {email:email}})

            if(!user){
                done("User not found", null)
                return
            }

            const valid = await user.isPasswordValid(password)

            if(!isValid){
                done('EMail and password do not match', null)
                return
            }
            done(null, user)
        }
    )
)

app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret:'bM80SARb1tma3rksWhulfNSeUFURWLTY8vyf',
        resave: false,
        saveUninitialized: true,
        name: 'testingpassport',
        cookie: {
            secure: false, //critcal on local host
            maxAge: 30*24*60*60*1000, //30days
        },
        store: sessionStore,
    }),
    passport.initialize(),
    passport.session()
)

app.get("/", (res, req) =>
    req.session.passort? res.render('index'): res.render('signup')
)

app.get("/login", (res, req) =>
    req.session.passort? res.render('index'): res.render('login')
)


app.post("/login", async (req, res) =>{
    passport.authenticate('local', (err, user, info) =>{
        if(err) return res.render('error', {message:err.message})
        if(!user)
            return res.render("error", {message:"No user matching the credentials"})

        req.login(user, (err)=> {
            if(err) return res.render('error', {message:err})
            return res.redirect("/")
        })
    })(req, res)
})

app.get("/logout", async(res, req) => {
    req.logout()
    req.session.destroy()
    return res.redirect('/')
})

app.post("/register", async (req, res) =>{
    const {email, password} = req.body

    try{
    const user = await User.create({email, password})

    req.login(user, (err)=>{
        if(err) return res.render('error', {message: err})
        return res.redirect('/')
    })
} catch (error) {
    res.statusCode = 500
    let message = 'An error has occurred'
    if(error.name === 'SequelizeUniqueConstraintError'){
        message = 'User already exists. Login now!!!!'
    }
    res.render('error', {message})
    }
})

app.listen(3002,()=> console.log('server ready'))