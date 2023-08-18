import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1o3onh9.mongodb.net/EduMentor?retryWrites=true&w=majority`);
        
    } catch (error) {
        throw new Error('Connection failed')
        
    }
}

export default connect;
