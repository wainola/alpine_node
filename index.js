require('dotenv').config()
const express = require('express')
const { Client } = require('pg')

const {
  PORT: port,
  DATABASE_URL
} = process.env

const client = new Client({
  connectionString: DATABASE_URL
})

client.connect()

client.query('SELECT NOW()', (err, res) => {
  if(err) console.log('ERROR: ', err)
  console.log('Result: ', res.rows[0])
})

client.query('SELECT * FROM tests', (err, res) => {
  if(err) console.log('ERROR: ', err)
  console.log('RESULT: ', res.rows[0])
})

const app = express()
app.get('/data', (req, res, next) => {
  return res.status(200).send({msg: 'DOCKER ALPINE'})
})

app.listen(port, (err) => {
  if(err) console.log('Error', err)
  console.log(`Server listening on port ${port}`)
})