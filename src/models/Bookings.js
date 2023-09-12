const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    tutorId: {
      type: String,
    
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    subject: String,
    location: String,
    salary: String,
    detailsInfo: String,
  }
  );
  export const Bookings = mongoose.models.Bookings || mongoose.model('Bookings', bookingSchema) ;