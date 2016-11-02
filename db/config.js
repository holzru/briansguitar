const mongoose = require('mongoose');
const env = require('dotenv');

mongoose.connect(env.MONGOOSE_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => {
  console.log('In DB');
});

module.exports = db;
