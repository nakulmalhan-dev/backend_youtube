import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
});
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"

import express from "express";
const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        app.on("err",(err)=>{
            console.log("error",err);
            throw err;
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
})()