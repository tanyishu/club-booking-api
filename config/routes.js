router.route('/submit')
  .get(reservationsController.submitForm)
  .post(reservationsController.createReservation);
