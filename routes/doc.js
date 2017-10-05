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