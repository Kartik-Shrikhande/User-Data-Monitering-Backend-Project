const express=require('express')
const app=express()
const mongoose= require('mongoose')
const router=require('./src/router/routes')
require('dotenv').config({path:'.env'})

app.use(express.json())
app.use("/",router)

mongoose.connect(process.env.MongoDB)
.then(()=>console.log('MongoDB is connected'))
.catch((err)=>{console.log(err.message);})

app.listen(process.env.PORT,()=>{
    console.log('App is Running on PORT:',process.env.PORT);
})

