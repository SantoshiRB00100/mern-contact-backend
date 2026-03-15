import express from "express";
import Contact from "../models/Contact.js"

const router = express.Router();

router.post("/", async (req,res) => {
    try{
        const newContact = new Contact(req.body);

        await newContact.save();

        res.json({
            message: "Data saved successfully"
        });
    }catch (error) {
        res.status(500).json(error);
        
    }
});

export default router;