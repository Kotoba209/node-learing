const express = require('express')
const db = require('./db/db')

const app = express()

app.get('/get_data', (req, res) => {
  db.query('select * from students', (err, data) => {
    if (err) return
    res.send(data)
  })
})

app.listen(3000, () => {
  console.log('app is running')
})
