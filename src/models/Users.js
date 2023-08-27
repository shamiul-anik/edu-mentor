import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        unique: false
    },
    role: {
        type: String,
        required: true,
        unique: false
    },

},
    { timestamps: true }
)

export const User = mongoose.models.users || mongoose.model('users', userSchema);