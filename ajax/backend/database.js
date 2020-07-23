const { TodoItem } = require('./models/todo')

let db = {}

const addItem = item => db[item.id] = item

const deleteItem = id => delete db[id]

const getItem = id => db[id]

const getItems = () => db

const setItem = (id, item) => {
  db[id] = { ...db[id], ...item }
}

const resetDB = () => {
  db = {}
  for (let i = 0; i < 10; i++) {
    const newItem = TodoItem(`Item ${i + 1}`, Boolean(i % 2))
    console.log(newItem)
    addItem(newItem)
  }
}

module.exports = {
  addItem,
  deleteItem,
  getItem,
  getItems,
  setItem,
  resetDB
}
