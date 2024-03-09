// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
});

connectDB();


// connecting db on index.js itself but it makes index.js more pollute so use different method
/*
import express from "express";
const app = express();

// function connectDB(){}

// connectDB(); to immediately execute it we use iify
// we put semicolon so that if previously any semicolon is not written then automatically put semicolon there bcoz iify will not work properly if we can't put semicolon there.
;(async()=>{
    // when you connect with db always put it in trycatch
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error");
            throw error
        });


        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
        throw err
    }
})()
*/