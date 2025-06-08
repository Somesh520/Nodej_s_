const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log("data fetched");  
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
});





router.post('/',async(req,res)=>{
    try{
const data=req.body
const newPerson = new person(data);
const save = await newPerson.save();
console.log('data saved');
res.status(200).json(save);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
        
    }
})




router.get('/:worktype', async (req, res) => { 
    try {
        const worktype = req.params.worktype;
        if (['chef', 'manager', 'waiter'].includes(worktype)) {  // Cleaner check
           const response = await person.find({ work: worktype });
            console.log("Data fetched successfully");
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invalid worktype' });  // Correct status
        }
    } catch (err) {
        console.error("Error:", err);  // Proper error logging
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const updateperson = req.body;

        // Debugging step - Check incoming data
        console.log("Update request received for ID:", personid);
        console.log("Update data:", updateperson);

        const response = await person.findByIdAndUpdate(personid, updateperson, {
            new: true, // Return updated document
            runValidators: true, // Validate schema constraints
        });  

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data updated successfully');
        res.status(200).json(response);
    } catch (err) {
        console.error("Internal error:", err);
        res.status(500).json({ error: 'Internal server error' }); // Ensure error response
    }
});


router.delete('/:id',async (req,res)=>{
    try{
        const personid=req.params.id;
        const response=await person.findByIdAndDelete(personid);
         if (!response) {
            //  console.log("error");
            return res.status(404).json({ error: 'Person not found' });

        }
        else{
            console.log("data delted successfully.");
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log('error');

    }
   

})

module.exports=router;