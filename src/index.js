// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
first approach to connect mongoDb using iife as well as we have also used the 
trycatch method and as if there will some delay in fetching the data for that 
we have also used the async await as data may be in the anywhere subcontinent 
of the world

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
})();

*/
