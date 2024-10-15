const mongoose = require('mongoose')
const dbconnect = async () => {
    await mongoose.connect("https://localhost:8800/");
};

module.exports = dbconnect;
