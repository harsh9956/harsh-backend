import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./db/db.js";

const app = express();

connectDb();

app.listen(8000, () => {
    console.log("Server is running");
});