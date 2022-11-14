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
            type:String,
            required:true
        },
        purpose:{
            type:String,
            required:true
        },
        graduationYear:{
            type:String,
            required:true
        },

        domain:{
            type:Array,
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
)

const User=mongoose.model("signUP",userSchema); //class bni h 

module.exports=User;