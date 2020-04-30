const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  console.log("/posts GET works")
  res.send(posts)
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id, title
  }
  console.log("/posts POST works")
  res.status(201).send(posts[id])
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
