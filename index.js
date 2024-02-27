require('dotenv').config();
const express = require('express');
const app = express()
//const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/new",(req,res)=>{
    res.send("wlecome to new tab")
})
app.get("/login",(req,res)=>{
    res.send('<h1>login with your details<h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening to port number ${process.env.PORT}`)
})