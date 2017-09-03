var mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;

var token = new Schema({
	
	student	:	[{	firstname	:	String,
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
					subcode 	:	[{ subcode : Number,
										status : Boolean}],
					semester    :	[{ semno: Number,
										year: Number,
										status: Boolean
									}],
		            branch      :	[{ branchname   : String,
										branchid    : String,
											status  : Boolean
									}]
				}],
	teacher :[{firstname:	String,
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

			}]

})
module.exports = mongoose.model('token', token);