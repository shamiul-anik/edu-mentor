import mongoose from "mongoose";

const { Schema } = mongoose;

const tutorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    subjects: {
        type: Array,
        required: true
    },
    students: {
        type: Number,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    
    location: {
        type: String,
        required: true
    },
    Education: {
        type: String,
        required: true
    },
    ratings:{
        type: Number,
        required: true
    }
},
    { timestamps: true }
)

export const Tutors = mongoose.models.Tutors || mongoose.model('Tutors', tutorSchema);
