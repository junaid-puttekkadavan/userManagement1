const express=require("express")
const app=express();
const userRoutes=require('./routes/user')
const adminRoutes=require('./routes/admin')
const path =require('path');
const connectDB = require("./db/connectDB");
connectDB();

//view engine setup
//app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'))
app.set('view engine','hbs');
//static assets stor cheyyan 

app.use(express.urlencoded({ extended: true }));
app.use(express.json())



app.use('/user',userRoutes)
app.use('/admin',adminRoutes)






app.listen(3001,()=>{
  console.log("server started at :http://localhost:3001");
})