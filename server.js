var express = require('express');
var port = 4000;
var app = express();
var morgan      = require('morgan');
var bodyParser = require('body-parser');
var studentRoutes = require('./routes/studentRoutes');
var teacherRoutes = require('./routes/teacherRoutes');
var student_api = require('./routes/student_api');
var doc = require('./routes/doc');
var mongoose = require('mongoose');
var config = require('./config');




mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.set('superSecret', config.secret);
app.use(morgan('dev'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: false
}));

app.use(express.static(__dirname + '/public'));


app.use('/studentRoutes',studentRoutes);
app.use('/teacherRoutes',teacherRoutes);
app.use('/studentapi', student_api);

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
});
