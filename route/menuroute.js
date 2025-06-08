const express = require('express');
const router = express.Router();

const menu=require('./../models/menu');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const menuItem = new menu(data);  // Fix model usage
        const MENU = await menuItem.save();
        console.log("Menu data saved successfully");
        res.status(200).json(MENU);
    } catch (err) {
        console.error("Error:", err);  // Show actual error details
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/',async(req,res)=>{
 try {
    const data = await menu.find();
    console.log("Data fetched successfully");
    res.status(200).json(data); 
} catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: 'Internal server error' });
}

})

router.get('/',async(req,res)=>{
 try {
    const data = await menu.find();
    console.log("Data fetched successfully");
    res.status(200).json(data); 
} catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: 'Internal server error' });
}

})

router.get('/:taste',async (req,res)=>{
     try {
        const taste = req.params.taste;
        if (['sour', 'spicy', 'sweet'].includes(taste)) {  // Cleaner check
           const response = await menu.find({ taste: taste });
            console.log("Data fetched successfully");
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invalid taste' });  // Correct status
        }
    } catch (err) {
        console.error("Error:", err);  // Proper error logging
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports=router;