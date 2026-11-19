import dotenv from "dotenv"
dotenv.config();

 
import connectDb from "./db/db.js"
import app from "./app.js";
 

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    });
})
.catch((err)=>{
  console.log("MoNGO db connection Failed!!!",err);
})
 