import mongoose from 'mongoose';
const { Schema } = mongoose;

const tutorRequestSchema = new mongoose.Schema({
  // Define your schema fields here
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
  },
  classname: {
    type: String,
  },
  district: {
    type: String,
  },
  area: {
    type: String,
  },

},{
  versionKey: false, // Disable the __v field
});

const Tutor_request = mongoose.models.Tutor_request || mongoose.model('Tutor_request', tutorRequestSchema);

export default Tutor_request;

  