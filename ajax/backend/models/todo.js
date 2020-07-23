const generateUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })

const TodoItem = (name, isCompleted = false) => {
  const _id = generateUUID()
  let _name = name
  let _isCompleted = isCompleted

  return {
    id: _id,
    name: _name,
    isCompleted: _isCompleted
  }
}

module.exports = {
  TodoItem
}
