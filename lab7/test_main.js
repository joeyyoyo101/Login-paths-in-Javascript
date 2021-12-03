const express = require('express')
const app = express()
const port = 3000
//192.168.1.1:9999
const bodyParser = require('body-parser')
const fs = require('fs')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    //res= respond
    //req= request
  res.send({
      name:"Hello"
  })
})

app.get('/number', (req, res) => {
  res.send(JSON.parse())
})

app.post('/number', (req, res) => {
  const number = JSON.parse(fs.readFileSync('./number.json','utf8'))
  number.push({phone:req.body.phone})
  console.log(number);
  // fs.writeFileSync('./number.json',JSON.stringify(number))
  res.send(` Register Success! ${req.body.phone}`)
})

app.post('/register', (req, res) => {
    console.log(req.body);
  res.send(` Register Success! ${req.body.username}`)
})

app.post('/login', (req, res) => {
    res.send('Login Success!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})