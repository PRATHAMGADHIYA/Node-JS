const express = require("express");
const mongoose = require('mongoose');
const dbconnect = require('./db');
const users = require('./user.model');
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
    let data = await users.find()
    res.send(data);
})

app.post('/', async (req, res) => {
    let data = await users.create(req.body)

    res.send(data);
})

app.listen(6060, () => {
    console.log("server listening on http://localhost:6060/");
    dbconnect();
})
