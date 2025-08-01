const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());

const internData = require("./intern.json");
const leadboardData = require('./leaderboard.json')

app.get("/api/internData", (req, res) => {
  const data = internData;
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/leadboard", (req, res) => {
  const data = leadboardData;
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});



app.listen(process.env.PORT, () => {
  console.log("working");
});
