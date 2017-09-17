var express = require('express');
var router = express.Router();
var teacher = require('../models/teacher');

router.post('/registration',function(req,res){
    var teacher1 = new teacher({'firstname':req.body.firstname,
		'middlename':req.body.middlename,
		'lastname':req.body.lastname,
		'email':req.body.email,
		'teacherid':req.body.teacherid,
		'password':req.body.password,
		'university':req.body.university,
		'whatsappno':req.body.whatsappno,
		'course':req.body.course})

    console.log("--------"+teacher1)
    teacher1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})





module.exports = router;