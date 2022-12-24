const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin-parteek:test123@cluster0.pt1cp.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.on('error',err => {
    console.log('DB connection failed')
});

mongoose.connection.on('connected',connect => {
    console.log('DB connected successfully')
});

module.exports=mongoose