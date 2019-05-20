var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// note: app.listen(3000) will NOT work here...
server.listen (3000, function() {
   console.log ('listening on port ' + 3000);
});

// express ...
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// socket.io ...
io.on('connection', function(socket){
  console.log ('a user connected with socket ');
  
  socket.on('chat', function(msg){
  	console.log ('chat: ' + msg);
    io.emit('chat', msg);
  });
  
  socket.on('toggle', function() {
  	io.emit ('toggle');
  });
});

