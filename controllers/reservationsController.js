var Reservation = require('../models/reservation');

// CREATE NEW LISTING
function createReservation(request, response) {
  console.log(request);
  console.log("hello!");
  var reservation = new Reservation();
  reservation.name = request.body.name;
  reservation.contact_number = request.body.contact_number;
  reservation.pax = request.body.pax;
  reservation.club = request.body.club;
  reservation.save(function(error) {
    if(error) return response.json({messsage: 'Could not ceate listing because:' + error});
  response.send('your reservation was successful');
    });
}

module.exports = {
  createReservation: createReservation
}
