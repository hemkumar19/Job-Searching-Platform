import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "JOB_SEARCHING_WEBAPP"
    }).then(()=>{
        console.log("Connected to Database!")
    }).catch((err)=>{
        console.log("Some Error occured while connecting  to database: ${err}")
    });
};