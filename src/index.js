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

app.delete('/user/:id', (req,res) => {
  userId = parseInt(req.params.id)
  if (userId >= 0 && userId < users.length){
    console.log("deleting user " + userId)
    res.status(202)
    res.send({
      id: userId
    })
    users.splice(userId, 1)
  } else {
    console.log("could not find user " + userId)
    res.status(204)
    res.send()
  }
})