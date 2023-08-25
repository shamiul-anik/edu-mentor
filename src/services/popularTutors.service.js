import DbConnect from '@/services/DbConnect'
import { ObjectId } from 'mongodb';
import 'server-only'
export const getPopularTutorFromDb = async () => {
    const db = await DbConnect();
    const tutorsCollections = await db.collection('tutors');
    // return tutorsCollections.find({}).toArray();
    const sortingOptions = { year_completed: -1 }; // Use -1 for descending order
    const queryOptions = {
        sort: sortingOptions,
        limit: 4 // Specify the limit (in your case, 4)
    };
    
    return tutorsCollections.find({}, queryOptions).toArray();

    
   
}

export const getSinglePopularTutorData = async (id) => {
    const db = await DbConnect();
    const singleTutorCollection = db.collection('tutors');
    const query = {_id: new ObjectId(id)}
    // return query
    return singleTutorCollection.findOne(query);
}
// const userData ={
//     "name": "hello",
//     "email": "hello@example.com"
// }
export const updateDatabase = async (userData) => {

    const db = await DbConnect();
    const userCollections = db.collection('users');
    const existingUser = await userCollections.findOne({ _id: userData._id });

if (existingUser) {
    // Document with the same _id already exists, handle accordingly
    console.log('same id')
} else {
    // Insert the new document
    try {
        const result = await userCollections.insertOne(userData);
        console.log('Data inserted:', result);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}
    
    
   
}