require('dotenv').config()
const express = require('express')

const { PORT: port } = process.env

const app = express()
app.get('/data', (req, res, next) => {
  return res.status(200).send({msg: 'DOCKER ALPINE'})
})

app.listen(port, (err) => {
  if(err) console.log('Error', err)
  console.log(`Server listening on port ${port}`)
})