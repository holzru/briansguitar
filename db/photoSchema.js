const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
});

const Photo = mongoose.model('Brian\'s Photos', photoSchema);

module.exports = Photo;