const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const excelJS= require('exceljs');

router.get("/", (req, res, next) => {
  
  res.sendFile(__dirname + "/index.html");
    
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    linkedinProfileUrl: req.body.linkedinProfileUrl,
  });
  contact
    .save()
    .then((result) => {
      const token = jwt.sign(
        {
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          linkedinProfileUrl: req.body.linkedinProfileUrl,
        },
        "this is dummy text",
        {
          //there is no expiration time for this token
        }
      );
      res.status(200).json({ 
        message:'Thank You for submiting information' ,
        token:token
    });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
