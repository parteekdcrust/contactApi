const mongoose =require('mongoose');

const contactSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    phone: Number,
    email: String,
    linkedinProfileUrl: String
})

module.exports=mongoose.model('contact',contactSchema)