const mongoose = require('mongoose');

var TesterSchema = new mongoose.Schema({
    id : {
        type : String,
        required : 'Required'
    }
    
});

mongoose.model("Tester", TesterSchema);