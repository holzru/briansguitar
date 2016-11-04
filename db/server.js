const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/'){
  return 'DB SERVER ROOT';
}

app.listen(PORT, function () {
  console.log(`DB server listening on port ${PORT}!`);
});
