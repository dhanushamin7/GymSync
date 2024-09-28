const mongoose=require('mongoose')

const URI="mongodb://localhost:27017/gym"

const dbConnection=async()=>{
   try{
         await mongoose.connect(URI)
         console.log("Database connection successful")
   }
   catch(err){
        console.log(err)
   }
}

module.exports=dbConnection;