const mongoose = require('mongoose');

var TesterSchema = new mongoose.Schema({
    id : {
        type : String,
        required : 'Required'
    },
    name : {
        type : String
    }
});

mongoose.model("Tester", TesterSchema);