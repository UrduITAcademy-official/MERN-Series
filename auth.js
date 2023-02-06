
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

});


router.post('/signin',async(req,res)=>{
try{

const {email,password}=req.body;

if(!email||!password){
    return res.json({error:"please fill the data"})
}
const userLogin=await User.findOne({email:email});
console.log(userLogin);
if(!userLogin){
    res.json({error:"user error"});
}
else{
    res.json({message:"user Signin Successfully"})
}


}catch(err){
    console.log(err);
}




});

 

module.exports=router;