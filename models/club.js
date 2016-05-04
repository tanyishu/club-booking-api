var mongoose = require('mongoose');

// Schema
var reservationSchema = mongoose.Schema({
  company: String,
  address: String,
});

// Return Model
module.exports = mongoose.model('Reservation', reservationSchema);
