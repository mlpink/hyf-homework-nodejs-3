const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = []

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})

app.get('/', (req,res) => {
  res.send("Hello World!")
})

app.get('/users', (req,res) => {
  res.send(users)
})

app.post('/user', (req,res) => {
  res.status(200)
  res.send({
    id: users.length
  })
  users.push({
    id: users.length
  })
})

app.get('/user/:id', (req,res) => {
  res.send({
      id: parseInt(req.params.id)
  })
})