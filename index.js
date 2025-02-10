const http = require('http').createServer();
const io = require('socket.io')(http, {
	cors: { origin: "*"} // allows any url to access the backend url
})

io.on('connection', socket => {
	console.log('user connected!');

	socket.on('message', message => {
		console.log(message);
		io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
	});
});

http.listen(8081, () => console.log('Listening on http://localhost:8081'));