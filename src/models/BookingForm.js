const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
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
    bookingDate: {
      type: Date,
      default: Date.now,
    },
  });
  export const BookingForm = mongoose.models.BookingForm || mongoose.model('BookingForm', bookingSchema) ;