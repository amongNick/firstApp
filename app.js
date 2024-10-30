 const express=require("express")
 const app=express()
 const dotenv=require("dotenv")
 dotenv.config()

 app.get("/",(req,res)=>{
    res.send("home page Bro!")
 })


 app.listen(process.env.PORT,()=>{
    console.log("RUNING.........")
 })