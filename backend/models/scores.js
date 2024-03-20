const mongoose = require("mongoose");
const { stringify } = require("querystring");

const scoreSchema=new mongoose.Schema({
    'stud_id':String,
    'quiz_id':String,
    'finTimes':Object,
    'ans':Object,
    'pattern':Object,
    'confidence':Object
});

module.exports=mongoose.model("scores",scoreSchema); 