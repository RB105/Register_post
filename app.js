const mongoose = require('mongoose');
const express = require('express');
const UserRouter = require('./routes/user')
const app = express();

const HOST = "192.168.1.86";
const PORT = 4000;

app.use(express.json());

app.use('user/', UserRouter)

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1/users');

mongoose.connection.on('open', () => {
    console.log("CONNECTED SUCCESSFULLY TO DATABASE");
});

mongoose.connection.on('error', () => {
    console.log("ERROR ON CONNECTION TO DATABASE");
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});