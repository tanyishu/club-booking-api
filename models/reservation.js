var mongoose = require('mongoose');

// Schema
var reservationSchema = mongoose.Schema({
  name: String,
  contact_number: Number,
  pax: Number
});

// Return Model
module.exports = mongoose.model('Reservation', reservationSchema);
