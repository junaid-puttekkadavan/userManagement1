const mongoose=require("mongoose");
//connect database
const connectDB=async()=>{
  try{
    const conn=await mongoose.connect('mongodb://localhost:27017/userAuth',{});  
     //   useUnifiedTopology:true,
    //   useNewUrlParser:true,
    //   useCreateIndex:true,
    // });
    console.log(`MongoDB Connected:${conn.connection.host}`);
    
  }catch(error){
    console.log(error);
    process.exit(1)
}
};

module.exports=connectDB