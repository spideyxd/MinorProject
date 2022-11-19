const express = require("express");
const app = express();
const mongoose=require("mongoose");
const cors = require("cors");


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MinorProjectDB").then(()=>console.log("connection successfull with MongoDB")).catch((err)=>console.log(err));

app.post("/schedule", (req, res) => {
  console.log(req.body);
});


app.listen(8000, () => {
  console.log("port 8000");
});


