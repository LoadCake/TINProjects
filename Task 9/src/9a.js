import express from 'express'
import {engine as handlebarsEngine} from 'express-handlebars'
import bodyParser from 'body-parser'

const app = express()

app.engine('handlebars', handlebarsEngine())
app.set('view engine', 'handlebars')
app.set('views', './Task 9/src/views')

app.use(bodyParser.json())

app.get('/ajaxpage', (req, res) =>
{
  res.render("ajaxpage");
})

app.post('/ajax', (req, res) => {
  const body = req.body
  const invalidFields = []

  if (typeof body.number1 !== 'number') {
    invalidFields.push('Number 1')
  }
  if (typeof body.number2 !== 'number') {
    invalidFields.push('Number 2')
  }
  if (typeof body.operation !== 'string') {
    invalidFields.push('Operation')
  }

  if (invalidFields.length > 0) {
    res.send({status: 'error', invalid_fields: invalidFields})
  } else {
    res.send({status: 'success'})
  }
})

app.listen(3000)
