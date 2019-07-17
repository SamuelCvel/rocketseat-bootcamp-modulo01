const express = require('express');

const server = express();

server.get('/test', (req, res) => {
  return res.send('Hello Word!');
});

server.listen(3000);
