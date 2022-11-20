const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./model/userSchema");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/MinorProjectDB")
  .then(() => console.log("connection successfull with MongoDB"))
  .catch((err) => console.log(err));

app.post("/schedule", (req, res) => {
  const {
    firstName,
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
    !lastName ||
    !graduationYear ||
    !email ||
    !mode ||
    !role ||
    !domain
  )
    return res.status(422).json({ error: "Please fill the fields properly ." });

  User.findOne({ email: email }).then((userExist) => {
    if (userExist)
      return res.status(422).json({ error: "Email already exist" });
  });

  const user = new User({
    firstName,
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
});

app.listen(8000, () => {
  console.log("port 8000");
});
