const mongoose = require('mongoose');

const dbconnect=async()=>{
    await mongoose.connect("mongodb+srv://prathamgadhiya:node@cluster0.47fgq.mongodb.net/");

    console.log("connected");
    
}
module.exports = dbconnect;