var mongoose = require('mongoose');

// Schema
var reservationSchema = mongoose.Schema({
  company: String,
  type: String,
  size: Number,
  status: Boolean
});

// Return Model
module.exports = mongoose.model('Reservation', reservationSchema);
