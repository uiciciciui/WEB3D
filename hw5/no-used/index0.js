var app = require('express')();

// listening on port 3000 can be done in TWO ways
// 1. 
var server = require('http').Server(app);

server.listen (3000, function() {
   console.log ('listening on port ' + 3000);
});

// OR 2. 
app.listen (3000, function() {
   console.log ('listening on port ' + 3000);
});

app.get ('/', function(req, res) {
   res.send ('<h1>Hello world</h1>');
});


