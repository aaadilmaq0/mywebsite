const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

const options = { useNewUrlParser: true };
const Blog = require('./models/blog')

mongoose.connect("mongodb://adil_maqusood:0xxnD89VEKwtLOG2@mywebsite-shard-00-00-kbpga.mongodb.net:27017,mywebsite-shard-00-01-kbpga.mongodb.net:27017,mywebsite-shard-00-02-kbpga.mongodb.net:27017/test?ssl=true&replicaSet=mywebsite-shard-0&authSource=admin&retryWrites=true",options)
    .then(()=>{
        console.log('Connected');    
    })
    .catch((error)=>{
        console.log(error);
    })

app.unsubscribe(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get("/getBlogs", (req,res,next)=>{
    Blog.find()
    .then( documents =>{
        console.log(documents);
    });
});
app.use("/blogs",(req, res, next) => {
    const blog = new Blog({
        title: 'Sabika',
        content: 'First Love'
    });
    blog.save();
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts :blog,
    });
});

module.exports = app;