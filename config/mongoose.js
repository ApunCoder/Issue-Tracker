const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hellonikhil570:nikk007@cluster0.t0rjj3x.mongodb.net/issue-tracker');

const db = mongoose.connection;

//handling error
db.on('error',console.error.bind(console,"Error in connecting to MongoDB"));   


db.once('open',() => {
    console.log("Connected to Database :: MongoDB ")
});

module.exports = db;
