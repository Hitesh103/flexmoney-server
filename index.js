const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./router/index");
const { connectDb } = require("./config/db");
require("dotenv").config();

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

let Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  connectDb();
});