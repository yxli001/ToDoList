const path = require('path')
const express = require('express')
const layout = require('express-layout')

const routes = require('./routes')
const app = express()

const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
    layout(), 
    express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded=({extended:false})
]
app.use(layout())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', routes)

app.listen('3000', () => {console.log("App running on https://localhost:3000")})