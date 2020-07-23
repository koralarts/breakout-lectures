const PORT = 8888
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const { TodoItem } = require('./models/todo')
const db = require('./database')

const CORS_OPTIONS = {
  origin: '*',
  optionSuccessStatus: 200
}

app.use(cors(CORS_OPTIONS))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello FE!')
})

app.get('/html', (req, res) => {
  res.send('<h1>Hello FE!</h1>')
})

app.get('/json', (req, res) => {
  res.json({ hello: 'Hello FE!' })
})

app.get('/reset', (req, res) => {
  db.resetDB()
  res.sendStatus(200)
})

app.get('/items', (req, res) => {
  res.json(db.getItems())
})

app.post('/items', (req, res) => {
  const newItem = TodoItem(req.body.name, req.body.isCompleted)
  db.addItem(newItem)
  res.json(newItem)
})

app.param('id', (req, res, next, id) => {
  if (!db.getItem(id)) {
    res.sendStatus(404)
  } else {
    next()
  }
})

app.get('/items/:id', (req, res) => {
  res.json(db.getItem(req.params.id))
})

app.put('/items/:id', (req, res) => {
  const id = req.params.id
  db.setItem(id, req.body)
  res.json(db.getItem(id))
})

app.delete('/items/:id', (req, res) => {
  db.deleteItem(req.params.id)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  db.resetDB()
  console.log(`Listening on port ${PORT}`)
})
