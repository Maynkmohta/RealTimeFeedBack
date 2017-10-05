var express = require('express');
var router = express.Router();
var student = require('../models/student');
var schedule = require('../models/schedule');
var clas = require('../models/clas');
var jwt = require('jsonwebtoken');
var jwtVerify = require('../routes/jwtVerify');
var superSecret = require('../config');
var token = require('../models/token');



router.post('/fillfeedback',function(req,res){
    var clas1 = new clas({'classid':req.body.classid,
		'teacherid':req.body.teacherid,
		'collegeid':req.body.collegeid,
		'subcode':req.body.subcode,
		'subjectname':req.body.subjectname,
		'feedback':[{
            'uniroll': req.body.uniroll,
            'marks':req.body.marks,
			'content':req.body.content,
			'skills':req.body.skills,
			'concepts':req.body.concepts,
			'manner':req.body.manner,
			'comment':req.body.comment
        }]
		})

    console.log("--------"+clas1)
    clas1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})



router.get('/schedule',function(req,res){
    schedule.find(function(err,data){
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        res.json(data)
    })
})

	
	

	
module.exports = router;