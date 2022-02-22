const { io } = require("socket.io-client");
let socket = io('http://192.168.1.52:3000');
socket.on('connect', () => {
    socket.emit("connected");
    console.log("Connected")
})