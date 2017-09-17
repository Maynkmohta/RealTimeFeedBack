var express = require('express');
var port = 3000;
var app = express();
var morgan      = require('morgan');
var bodyParser = require('body-parser');
var registrationLogin = require('./routes/registrationLogin');
var studentRoutes = require('./routes/studentRoutes');
var teacherRoutes = require('./routes/teacherRoutes');
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



app.use('/',registrationLogin);
app.use('/studentRoutes',studentRoutes);
app.use('/teacherRoutes',teacherRoutes);

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
});
