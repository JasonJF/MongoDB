const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
// const CourseModel = mongoose.model("Course");
const TesterModel = mongoose.model("Tester");

router.get("/list", (req, res) => {
    TesterModel.find((err, docs) => {
        if(!err)
        {   
            console.log(docs);
            res.send("Course Controller");
        }
        else
        {
            res.send("Error");
        }
    })
    // res.send("Course Controller");
});

module.exports = router;