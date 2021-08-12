const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
// const CourseModel = mongoose.model("Course");
const TesterModel = mongoose.model("Tester");
const PcbModel = mongoose.model("Pcb","pcbs");

router.get("/list", (req, res) => {
    TesterModel.find((err, docs) => {
        if(!err)
        {   
            console.log(docs);
            // res.send("Course Controller");
        }
        else
        {
            res.send("Error");
        }
    });
    // PcbModel.find((err, docs) => {
    //     if(!err)
    //     {   
    //         console.log(docs);
    //         // res.send("Course Controller");
    //     }
    //     else
    //     {
    //         res.send("Error");
    //     }
    // });
    PcbModel.find({}, 'PartNumber Version',(err, docs) => {
        if(!err)
        {   
            console.log(docs);
            // res.send("Course Controller");
        }
        else
        {
            res.send("Error");
        }

    });
    // console.log(values);
});

module.exports = router;