const express = require("express");
const app = express();
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/MinorProjectDB").then(()=>console.log("connection successfull with MongoDB")).catch((err)=>console.log(err));

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(8000, () => {
  console.log("port 3000");
});

