var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schedule = new Schema({
	
	collegeid	:	String,
	semester    :	[{ semno: Number,
						year: Number,
						status: Boolean
					}],
	branchid	:	String,
	schedule	:	[{ weakno     : Number,
						startdate : Date,
						enddate   : Date,
						monday    : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        },
						tuesday    : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        },
					  wednesday   : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        },
					  thursday    : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        },
					   friday      : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        },
										
					  saturday    : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        },
					   sunday   : {
												timeslot: [{ 
                                                          starttime  : Date,
                                                          endtime    : Date,
                                                          subcode    : Number,
                                                          subname    : String,
                                                          teachername: String,
                                                          teacherid	 : Number
                                                        }],
                                                holiday : Boolean,
                                                 status : Boolean
                                        }
                 										
					
					}]
})
module.exports = mongoose.model('schedule', schedule);