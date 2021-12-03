const express = require('express')
const Pool = require('pg-pool')
const cors = require('cors')
const pool = new Pool({
    database: 'postgres',
    user: 'lab8',
    password: '12345678',
    port: 5436,
    ssl: false,
    max: 20, // set pool max size to 20
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
})

const app = express()
const port = 9999
    // const fs = require('fs')
app.use(require('body-parser').json())
app.use(cors(true))
app.get('/profile/all', async(req, res) => {
    const users = await pool.query('select username, PASSWORD, age from users');
    res.send(users.rows)
})

app.delete('/profile/:id/delete', async(req, res) => {
    await pool.query('DELETE from users WHERE username = $1', [req.params.id])
    res.send('Success Delete')
})

app.patch('/reset/:id/update', async(req, res) => {
    await pool.query('UPDATE users set password = $1 WHERE username = $2 ', [req.body.password, req.params.id])
    res.send('Success Update')
})

app.post('/login', async(req, res) => {
    let data = {
        username: req.body.username,
        password: req.body.password
    }
    const users = await pool.query('select username, PASSWORD from users where username = $1 and password = $2', [data.username, data.password]);
    res.send(users.rows)
})

app.post('/register', async(req, res) => {
    let data = {
        username: req.body.username,
        password: req.body.password
    }
    await pool.query('INSERT INTO users(username,password) VALUES($1, $2) RETURNING *', [req.body.username, req.body.password])
    data.message = 'success'
    res.send(data)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})