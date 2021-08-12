const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/production", { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if(!error)
    {
        console.log("Success Connected!");
    }
    else{
        console.log("Error connecting to database.");
    }
});

const Tester = require('./testers.model');
const Pcb = require('./pcb.model');