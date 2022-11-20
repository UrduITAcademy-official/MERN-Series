const express = require('express');
const res=require('express/lib/response');
const { default: mongoose } = require('mongoose');
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})


const PORT=process.env.PORT
const DB = process.env.DATABASE
mongoose.connect(DB).then(()=>{
    console.log('Connected TO DB')
}).catch((err)=>console.log(' no connection'));
const app=express();

const checkURL=(req,res,next)=>
{
  console.warn('current route ',req.originalUrl)
  next();
}
app.use(checkURL);

app.get('/',(req,res)=>{
    res.send('Hello from Main-page')
});

app.get('/about',(req,res)=>{
    res.send('Hello from about page')
});

app.get('/contactus',(req,res)=>{
    res.send('Hello from contact page')
});
app.listen(PORT,()=>{
    console.log('Server is Running')
    console.log(PORT)
   
})
