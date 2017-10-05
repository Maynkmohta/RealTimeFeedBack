var express = require('express');
var router = express.Router();
var student = require('../models/student');
var schedule = require('../models/schedule');
var clas = require('../models/clas');
var jwt = require('jsonwebtoken');
var jwtVerify = require('../routes/jwtVerify');
var superSecret = require('../config');
var token = require('../models/token');


router.post('/registration',function(req,res){
    var student1 = student({'firstname':req.body.firstname,
		'middlename':req.body.middlename,
		'lastname':req.body.lastname,
		'email':req.body.email,
		'password':req.body.password,
        'uniroll':req.body.uniroll,
        'whatsappno':req.body.whatsappno,
		'university':[{
            'collegename': req.body.collegename,
            'collegeid':req.body.collegeid
        }],
		'subjcode':[{
            'subcode':req.body.subcode
        }],
        'branch':[{
            'branchname':req.body.branchname,
            'branchid':req.body.branchid
        }],
        'semester':[{
                'semno':req.body.semno,
                'year':req.body.year
                    }]
        })

    
   


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
          console.log(student);
            var tokenData = new Object({email: student.email, uniroll:student.uniroll,collegeid: student.collegeid,
			collegename:student.collegename, subcode: student.subcode})
		    var token = jwt.sign(tokenData, superSecret.secret, {
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
})







	
module.exports = router;