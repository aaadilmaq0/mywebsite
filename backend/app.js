var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dm4yeplwk",
  api_key: "556287774924229",
  api_secret: "m1eG8hZiQITfubt6k8wNkdDHKac"
});

const options = { useNewUrlParser: true };
const Blog = require("./models/blog");

mongoose
  .connect(
    "mongodb://adil_maqusood:0xxnD89VEKwtLOG2@mywebsite-shard-00-00-kbpga.mongodb.net:27017,mywebsite-shard-00-01-kbpga.mongodb.net:27017,mywebsite-shard-00-02-kbpga.mongodb.net:27017/test?ssl=true&replicaSet=mywebsite-shard-0&authSource=admin&retryWrites=true",
    options
  )
  .then(() => {
    console.log("Connected");
  })
  .catch(error => {
    console.log(error);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/getBlogs", (req, res, next) => {
  Blog.find().then(documents => {
    res.status(200).json(documents);
  });
});

app.get("/getImages", (req, res, next) => {
    cloudinary.api.resources({ max_results: 100},function(error, result) {
      res.status(200).json(result);
    });
});

app.post("/pushBlog", (req, res, next) => {
  const blog = new Blog({
    moodName: req.body.moodName,
    blog: req.body.blog
  });
  blog.save();
  res.status(200).json({
    message: "Blog uploaded to database successfully"
  });
});

app.use(cors());
module.exports = app;
