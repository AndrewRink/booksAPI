require('dotenv').config()
const express = require ('express')
const methodOverride = require('method-override')
const mongoose = require ('mongoose')
const cors = require('cors')

const bookRoutes = require('./controllers/book')

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cors())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/books', bookRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Hello!<h1/>')
})

const PORT = process.env.PORT

app.listen (PORT, console.log(`listening on port ${PORT}`))
