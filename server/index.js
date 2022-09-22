// import { Express } from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import { CorsRequest, CorsOptions } from "cors";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

app.use(express.json());
require("./db/conn");
app.use(require("./router/auth"));

//Middleware

let middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`hello world from server`);
});

app.get("/about", middleware, (req, res) => {
  console.log("abouttt");
  res.send(`hello about`);
});

app.get("/contact", (req, res) => {
  res.send(`hello contact`);
});

app.get("/signin", (req, res) => {
  res.send(`hello Signup`);
});

app.get("/signup", (req, res) => {
  res.send(`hello Signup`);
});

app.listen("8000", () => {
  console.log(`Server us running at ${port}`);
});
