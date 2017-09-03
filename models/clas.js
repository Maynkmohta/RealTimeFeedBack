var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clas = new Schema({
	classid	:	Number,
  teacherid	:	Number,
  collegeid	:	String,
	subcode	:	Number,
 subjectname:	String,
	feedback:	[{ uniroll: Number 
				}]
})
	


module.exports = mongoose.model('clas', clas);