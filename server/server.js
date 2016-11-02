const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
  console.log('Connecting...');
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
