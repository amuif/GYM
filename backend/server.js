const express = require("express");
const mongoose = require("mongoose");
const excerciseRoute = require("./Routes/excerciseRoutes");
const userRoute = require("./Routes/userRoutes");
const cookie = require('cookie-parser')
const cors = require("cors");

const app = express();

require("dotenv").config();

//  connecting to the database
mongoose
  .connect("mongodb://127.0.0.1/gym-databse")
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Port listening on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });

//  stripe
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// auth

// middleware
app.use(express.json());
app.use(cookie())
app.use(express.urlencoded({extended:false}))

// routes
app.use("/api/excercise/", excerciseRoute);
app.use("/api/user/", userRoute);
