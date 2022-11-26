const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt=require("bcrypt");

const DetailUser = require("./model/DetailSchema");

app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb://localhost:27017/MinorProjectDB")
  .then(() => console.log("connection successfull with MongoDB"))
  .catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  const {
    firstName,
    password,
    graduationYear,
    lastName,
    email,
    purpose,
    date,
    mode,
    role,
    domain,
  } = req.body;

  if (
    !firstName ||
    !password||
    !lastName ||
    !graduationYear ||
    !email ||
    !role 
  )
    return res.status(422).json({ error: "Please fill the fields properly ." });

  DetailUser.findOne({ email: email }).then((userExist) => {
    if (userExist)
      return res.status(422).json({ msg: "error" });
      const user = new DetailUser({
        firstName,
        password,
        lastName,
        email,
        graduationYear,
        purpose,
        date,
        mode,
        role,
        domain,
      });
    
      console.log(user);
     user.save();
     return res.json({ msg:"success" });
  });

 
});

app.post('/login', async (req, res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status (400).json({msg: "NaN"})
        }
        const userLogin = await DetailUser.findOne({ email: email });
        
        if (userLogin) {
                const isMatch = await bcrypt.compare(password, userLogin.password);
        if (!isMatch) {
            res.status (400).json({ msg: "error" });
        } else {
            res.json({ msg: "success" });
        }
       } else {
              res.status (400).json({ msg: "error"});
        }
    } catch (err) {
        console.log(err);
}
});



app.listen(8000, () => {
  console.log("port 8000");
});
