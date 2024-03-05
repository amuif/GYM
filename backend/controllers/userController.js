const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// create a user

const createUser = async (req, res) => {
  const { email, password, name } = req.body;
  console.log(req.body);

  if (!email || !password || !name) {
    return res.status(400).json({ error: "Both fields must be filled" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be greater than 6 characters" });
  }

  try {
    const match = await userModel.findOne({ email: req.body.email });
    if (match)
      return res
        .status(409)
        .send({ message: "User with given email already exits!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await new userModel({
      ...req.body,
      password: hashPassword,
    }).save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "There is no email with this account" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      jwt.sign(
        { id: user._id, email: user.email, name: user.name },
        process.env.JWT_PRIVATEKEY,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }

          res
            .cookie("token", token, { sameSite: "none", secure: true })
            .json(user);
        }
      );
    }
    if (!match) {
      res.status(400).json("passwords do not match");
    }
  } catch (error) {
    console.log(error);
  }
};

// get User

const getUser = (req, res) => {
  const { token } = req.cookies;
  console.log(req.cookies);
  if (token) {
    jwt.verify(token, process.env.JWT_PRIVATEKEY, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  loginUser,
  createUser,
  getUser,
};
