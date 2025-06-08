const mongoose=require('mongoose');
//schemas
const personschemas=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
         type: String, 
    enum:['chef','waiter','manager'],
    required:true


    },
    salary:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
        ,unique:true
    },
    address:{
        type:String
    },



});
const person=mongoose.model('person',personschemas);
module.exports=person;