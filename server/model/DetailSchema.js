const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        password:{
            type :String,
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

        role:{
            type:String,
            required:true

        }
        ,
        domain:{
            type:String,
            
        },
        date:{
            type:String,
            
        },

        mode:
        {
            type:String,
            
        }

    }
);


userSchema.pre('save', async function (next) {
    if (this.isModified ('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        // console.log(this.password);
    }
    next();
});

const User=mongoose.model("user",userSchema); //class bni h 
module.exports=User;