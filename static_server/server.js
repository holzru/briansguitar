const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/static'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'static', 'index.html'));
})

let PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Static file server listening on port ${PORT}!`);
});
