//These routes will be used for registration and Login , here
// we would register the user and authenticate the user and generate the token
// the token will be supplied to the user.`

var express = require('express');
var registrationLogin = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user');
var jwt    = require('jsonwebtoken'); 
var superSecret = require('../config');
var student = require('../models/student');
var schedule = require('../models/schedule');
var clas = require('../models/clas');
var token = require('../models/token');
var jwtVerify = require('../routes/jwtVerify');
var superSecret = require('../config')

registrationLogin.post('/registration',function(req,res){
    var user1 = new user({'firstname':req.body.firstname,
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

    console.log("--------"+user1)
    user1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})

registrationLogin.post('/login', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      msg: "No data entered"
    })
  } else {
    user.findOne({
      email: req.body.email
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, superSecret.secret, {
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

module.exports = registrationLogin;
