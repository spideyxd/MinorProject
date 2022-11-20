const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            // unique:true,
            type:String,
            required:true
        },
        purpose:{
            type:String,
           
        },
        graduationYear:{
            type:String,
            required:true
        },

        domain:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },

        mode:
        {
            type:String,
            required:true
        }

    }
);

const User=mongoose.model("user",userSchema); //class bni h 

module.exports=User;