const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello from server`);
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body.message;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Fields are empty" });
  } else if (password !== cpassword) {
    return res.status(422).json({ error: "Password not matching" });
  } else {
    User.findOne({ email: email }).then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email exist" });
      }

      const user = new User({ name, email, phone, work, password, cpassword });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "Registered successfully" });
        })
        .catch((err) => {
          res.status(500).json({ message: "Failed to register" });
        });
    });
  }

  //res.send("registration page");
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Fields are empty" });
  }

  User.findOne({ email: email })
    .then(async (userlogin) => {
      //console.log(userlogin);
      const isMatch = await bcrypt.compare(password, userlogin.password);
      const token = await userlogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      } else {
        return res.status(200).json("User signin successfully");
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ message: "Failed to find email" });
    });
});

module.exports = router;
