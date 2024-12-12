const express = require('express');
const router = express.Router();
const userSchema=require("../model/userModel")

router.get('/login', (req, res) => {
  res.render('user/login'); 
});

router.get('/register',(req,res)=>{
  res.render('user/register')
  console.log("fasd")
})

router.post('/register',(req,res)=>{
  console.log("hello")
  console.log(req.body)
  if(!req.body){
    console.log("failed")
  }
  res.redirect("/user/login")
  // try {
  //   const{email,password}=req.body
  //   console.log(email,password)
  //   const user=await userSchema.findOne({email})
  //   if(user){
  //     res.render("user/register",{message:"user already exist"})
  //   }
  //   const newuser=new userSchema({
  //     email:email,
  //     password:password
  //   })
  //   await newuser.save()
  //   res.redirect("/login")
    
  // } catch (error) {
  //   console.error(error)
  // }
})

module.exports = router;
