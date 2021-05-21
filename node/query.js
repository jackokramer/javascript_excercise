const express = require('express')
const session = require('express-session')

const app = express()
const myMiddleware = (res,req, next) => {
    /*...*/
    next()
}

app.use(session({
    'secret': "321jku23iad"
})
    //req.session.name="flavio"
)

app.use(express.urlencoded())

app.set('view engine', 'pug')

app.get('/about', (req, res)=> {
    res.render('about', {name: 'Flavio'})
    app.use((req, res, next) => { /* */ })
    req.locals.name = 'Flavio'
    app.use(express.static('public'))

})

app.post('/submit-form', (req, res)=> {
    const username = req.body.username
    //..
    res.end()
})


app.listen(3003)


