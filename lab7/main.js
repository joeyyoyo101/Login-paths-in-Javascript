const express = require('express')
const app = express()
const port = 9999
    //192.168.1.1:9999
const bodyParser = require('body-parser').json();
const fs = require('fs')
app.use(bodyParser)

app.get('/', (req, res) => {
    //res= respond
    //req= request
    res.send({
        name: "Hello"
    })
})


app.get('/profile', (req, res) => {
    res.send({
        "Name": "Suwatchai Piewfad",
        "Nickname": "Joey",
        "phone": "+6693867065",
        "Hobby": "Investing",
        "Graduation": "Khon Kaen University"
    })
})

app.post('/profile', (req, res) => {
    const profile = JSON.parse(fs.readFileSync('./profile.json', 'utf8'))
    profile.push({ Name: req.body.Name })
    console.log(profile);
    fs.writeFileSync('./profile.json', JSON.stringify(profile))
    res.send(`profile success ${req.body.name}`)
})

app.get('/number', (req, res) => {
    res.send({
        phone: "(+5514515415411)"
    })
})

app.post('/number', (req, res) => {
    const number = JSON.parse(fs.readFileSync('./number.json', 'utf8'))
    number.push({ phone: req.body.phone })
    console.log(number);
    // fs.writeFileSync('./number.json', JSON.stringify(number))
    res.send(`phone succeed ${req.body.phone}`)
})

app.get('/register', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./register.json', 'utf8')))
})

app.post('/register', (req, res) => {
    const register = JSON.parse(fs.readFileSync('./register.json', 'utf8'))
    register.push({
        email: req.body.email,
        phone: req.body.phone,
        province: req.body.province
    })
    console.log(register);
    fs.writeFileSync('./register.json', JSON.stringify(register))
    res.send(`register success ${req.body.phone}`)
})

app.post('/login', (req, res) => {
    res.send('Login Successdd!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})