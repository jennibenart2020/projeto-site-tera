let http = require('http');
let app = require('./config/express.js')();
let db = require('./config/database.js');

//Create Server end set port
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server running at port ' + app.get('port'));
});
db('mongodb://localhost:27017/postfaceback');