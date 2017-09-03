var mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;

var teacher = new Schema({
	
	firstname	:	String,
	middlename	:	String,
	lastname	:	String,
	email		:	String,
	uniroll	    :	Number,
	password    :	String,
	university	:	[{
					collegename: String,
					collegeid : String,
						status: Boolean
					}],
	whatsappno	:	Number,
	subjcode :	[{ subcode : Number,
						status : Boolean}],
	semester    :	[{ semno: Number,
						year: Number,
						status: Boolean
					}],
	branch                 :	[{ branchname   : String,
									branchid    : String,
                                        status  : Boolean
								}]
})


module.exports = mongoose.model('student', student);