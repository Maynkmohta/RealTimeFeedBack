var mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;

var course = new Schema({
	subname	    :	String,
	syllabus	:	mongoose.SchemaTypes.Url,
		notes	:	[{ notename : String,
						url     : mongoose.SchemaTypes.Url,
					}]
		subcode	:	Number,
	teacherid	:	[ Number ],
	collegeid	:	String,
		branch	:	[{ branchname : String,
					  branchid    :  String,
						  status  : Boolean
					}]

})
	


module.exports = mongoose.model('course', course);