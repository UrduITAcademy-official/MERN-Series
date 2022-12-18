
const express=require('express')
const router=express.Router();
require('./conn')
const User=require("./userSchema")

router.post('/register',(req,res)=>{
    

const{name,email,work,password,cpassword}=req.body;

if(!name ||!email|| !work|| !password ||!cpassword){
    return res.json({error:"Please fill All"});
} 

User.findOne({email:email}).then((userExists)=>{
    if(userExists){
        return res.json({error:"Please user different email "})
    }
    const user=new User(req.body)
    user.save().then(()=>{
        res.json({message:"Data-Saved"})
    }).catch((err)=>res.json({error:"Failed to register data"}))
})
 
//console.log(req.body)
 //res.json({message:req.body});




});

module.exports=router;