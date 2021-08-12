const mongoose = require('mongoose');

var PcbSchema = new mongoose.Schema({
    id : {
        type : String,
        required : 'Required'
    }
    

});

mongoose.model("Pcb", PcbSchema);