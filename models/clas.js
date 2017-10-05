var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clas = new Schema({
	classid	:	Number,
  teacherid	:	Number,
  collegeid	:	String,
	subcode	:	Number,
 subjectname:	String,
	feedback:	[{ uniroll: Number, 
					marks: Number,
					content: String,
					skills: Number,
					concepts: String,
					manner: String,
					comment: String
				}]
})
	


module.exports = mongoose.model('clas', clas);