const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

io.on('connection', (socket) => {
    socket.on('message', (message) => io.emit('message', message));
});



server.listen(3000, () => console.log('Server listens on http://localhost:3000'));