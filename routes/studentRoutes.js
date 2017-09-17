var express = require('express')
var router = express.Router()
var student = require('../models/student');
var schedule = require('../models/schedule');
var clas = require('../models/clas');
var jwt = require('jsonwebtoken');
var jwtVerify = require('../routes/jwtVerify');
var superSecret = require('../config');


/*router.post('/registration',function(req,res){
    var student1 = new student({'firstname':req.body.firstname,
		'middlename':req.body.middlename,
		'lastname':req.body.lastname,
		'email':req.body.email,
		'uniroll':req.body.uniroll,
		'password':req.body.password,
		'university':req.body.university,
		'whatsappno':req.body.whatsappno,
		'subjcode':req.body.subjcode,
        'semester':req.body.semester,
        'branch':req.body.branch})

    console.log("--------"+student1)
    student1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})

router.post('/login', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      msg: "No data entered"
    })
  } else {
    student.findOne({
      email: req.body.email
    }, function(err, student) {

      if (err) throw err;

      if (!student) {
        res.json({ success: false, message: 'Authentication failed. Student not found.' });
      } else if (student) {

        // check if password matches
        if (student.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if student is found and password is right
          // create a token
          console.log("welcome");
		    var token = jwt.sign(student, superSecret.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

          res.json({
            success: true,
            message: 'token generated',
            token: token
          });
        }

      }

    })
  }
})*/







router.get('/schedule',function(req,res){
    schedule.find(function(err,data){
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        res.json(data)
    })
})

router.post('/fillfeedback',function(req,res){
    var clas1 = new clas({'classid':req.body.classid,
		'teacherid':req.body.teacherid,
		'collegeid':req.body.collegeid,
		'subcode':req.body.subcode,
		'subjectname':req.body.subjectname,
		'feedback':req.body.feedback })

    console.log("--------"+clas1)
    clas1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})
	
	
router.post('/logout', function (req, res) {
  req.token.destroy();
  res.send("logout success!");
})
	
	
	
	





module.exports = router;