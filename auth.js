
const express=require('express')
const router=express.Router();
require('./conn')
const User=require("./userSchema")

router.post('/register',async(req,res)=>{
    
const{name,email,work,password,cpassword}=req.body;

if(!name ||!email|| !work|| !password ||!cpassword){
    return res.json({error:"Please fill All"});
} 

try{
     const userExists=await User.findOne({email:email})

     if(userExists){
         return res.json({error:"Please use diff email "})
     }
     const user =new User({name,email,work,password,cpassword});
     await user.save();
     res.json({message:"User Register "})

}catch(err){
    console.log(err)
}
 
//console.log(req.body)
 //res.json({message:req.body});

});

module.exports=router;