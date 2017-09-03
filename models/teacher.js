var mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;

var teacher = new Schema({
	
	firstname	:	String,
	middlename	:	String,
	lastname	:	String,
	email		:	String,
	password	:   String,
	teacherid	:	Number,
	university	:	[{
					collegename: String,
					collegeid : String,
						status: Boolean
					}],
	whatsappno	:	Number,
		course	:	[{
					subjectname	:	String,
					syllabus	:	mongoose.SchemaTypes.Url,
						notes	:	[{ notename : String,
										url		: mongoose.SchemaTypes.Url
									}],
						subcode	:	Number,
					teacherid	:	[ Number ],
					collegeid	:	String,
						branch	:	[{ branchname : String,
										branchid  : String,
										status    : Boolean
									}]


					}]
})


module.exports = mongoose.model('teacher', teacher);