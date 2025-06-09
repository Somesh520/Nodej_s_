const mongoose = require('mongoose');

// Encode password if it contains special characters
const password = encodeURIComponent("Some@123"); 

const mongourl = `mongodb+srv://somesh520:${password}@cluster0.cyq8t6t.mongodb.net/hotels?retryWrites=true&w=majority`;

mongoose.connect(mongourl)
    .then(() => console.log("Server is connected"))
    .catch((err) => console.error("Something went wrong! Error:", err));

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log("Server is disconnected");
});

module.exports = db;