import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./src/db/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})