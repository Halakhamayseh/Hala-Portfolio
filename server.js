'use strict';
const express = require('express');
const server = express();
const PORT = process.env.PORT || 1995;
// the server is ready for listening
server.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});
server.get('/lab5', (req, res) => {
    res.send('this test for lab 5!')
});
