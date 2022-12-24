const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const contactRoute=require('./api/routes/contact');
const db=require('./db');

// app.use('view egine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/contact',contactRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error:"url not found"
    })
})

module.exports = app
