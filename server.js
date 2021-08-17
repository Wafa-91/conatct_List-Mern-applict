//import express
const express=require('express')
//initialisation :instance
 const app=express()

 //environement de variables
 require('dotenv').config()

const connectDB=require('./config/connectDB')
 // connect db
 connectDB()

 //creation ds routes
 //middleware routing body parse
 app.use(express.json())
app.use('/api/contact',require('./routes/contacts'))


//listen to server
const PORT=process.env.PORT
 app.listen(PORT,(err)=>{err?console.log(err):console.log("server is running")})