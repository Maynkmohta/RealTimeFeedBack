var express = require('express');
var router = express.Router();
var teacher = require('../models/teacher');
var schedule = require('../models/schedule');
var clas = require('../models/clas');
var jwt = require('jsonwebtoken');
var jwtVerify = require('../routes/jwtVerify');
var superSecret = require('../config');
var token = require('../models/token');
var multer = require('multer');
var path = require('path');



router.post('/registration',function(req,res){
    var teacher1 = new teacher({'firstname':req.body.firstname,
		'middlename':req.body.middlename,
		'lastname':req.body.lastname,
		'email':req.body.email,
		'teacherid':req.body.teacherid,
		'password':req.body.password,
		'university':[{
            'collegename': req.body.collegename,
            'collegeid':req.body.collegeid
        }],
		'whatsappno':req.body.whatsappno,
		'course':[{
			'subjectname':req.body.subjectname,
			'syllabus':req.body.syllabus,
			'notes':[{
				'notename':req.body.notename,
				'url':req.body.url
			}],
			'subcode':req.body.subcode,
			'teacherid':req.body.teacherid,
			'collegeid':req.body.collegeid,
			'branch':[{
				'branchname':req.body.branchname,
				'branchid':req.body.branchid
			}]
			}]
		
		
		})

    console.log("--------"+teacher1)
    teacher1.save(function(err,data){
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
    teacher.findOne({
      email: req.body.email
    }, function(err, teacher) {

      if (err) throw err;

      if (!teacher) {
        res.json({ success: false, message: 'Authentication failed. Teacher not found.' });
      } else if (teacher) {

        // check if password matches
        if (teacher.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if teacher is found and password is right
          // create a token
          console.log(teacher);
            var tokenData = new Object({email: teacher.email})
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
var storage = multer({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

router.post('/file', function(req, res) {
	var upload = multer({
		storage: storage,
		fileFilter: function(req, file, callback) {
			var ext = path.extname(file.originalname)
			if (ext !== '.doc' && ext !== '.pdf') {
				return callback(res.end('Only Docs and PDFs are allowed'), null)
			}
			callback(null, true)
		}
	}).single('file.originalname');
	upload(req, res, function(err) {
		res.end('File is uploaded')
		res.file;
	})
})




module.exports = router;