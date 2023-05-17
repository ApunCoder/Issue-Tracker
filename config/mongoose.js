const mongoose = require('mongoose');

mongoose.connect(`{process.env.MONGO_URI}`);

const db = mongoose.connection;

//handling error
db.on('error',console.error.bind(console,"Error in connecting to MongoDB"));   


db.once('open',() => {
    console.log("Connected to Database :: MongoDB ")
});

module.exports = db;
