import express from 'express'
import {engine as handlebarsEngine} from 'express-handlebars'
import bodyParser from 'body-parser'

const app = express()

app.engine('handlebars', handlebarsEngine())
app.set('view engine', 'handlebars')
app.set('views', './Task 8/src/views')

app.use(bodyParser.json())

app.get('/hello', (req, res) =>
{
  res.send("Hello World")
})

app.get('/form', (req, res) => {
  res.render('form')
})

app.get('/formdata', (req, res) => {
  res.render('formdata', {query: req.query})
})

app.post('/jsondata', (req, res) => {
  res.render('jsondata', {jsonBody: req.body})
})

app.listen(3000)
