const express = require('express')
const app = express()

app.get('/node', (req, res) => {
    res.send("Welcome to Node JS")
})

app.listen(3100,()=>{
    console.log("listening on ");
    
})