import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        
    } catch (error) {
        throw new Error('Connection failed')
        
    }
}

export default connect;
