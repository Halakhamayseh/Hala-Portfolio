'use strict';
alert('Welcome to my Portfolio')
const express = require('express');
const server = express();
const PORT = process.env.PORT || 1995;
server.use(express.static('./public'));
// the server is ready for listening
server.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});
server.get('/lab5', (req, res) => {
    res.send('try to uplode the vedio but i can not')
});

//  $('.container').append(`video src="video/WhatsApp Video 2021-04-17 at 6.12.53 PM (1).mp4"></video`);