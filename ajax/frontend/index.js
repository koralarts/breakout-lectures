const PORT = 8080
const express = require('express')
const app = express()

app.use('/static', express.static(__dirname + '/static'))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => { console.log(` Listening on port ${PORT}`) })
