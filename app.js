var app = require('express').createServer()
  , io = require('socket.io').listen(app);

app.listen(1337);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('hello', { word: ' connected ' });
  socket.on('add-string', function (data) {
     socket.broadcast.emit('add-string',data);
  });
});
