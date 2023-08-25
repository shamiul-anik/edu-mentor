import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    displayName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },

},
    { timestamps: true }
)

export const Users = mongoose.models.Users || mongoose.model('Users', userSchema);