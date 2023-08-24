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
    
    const topRatedTutors = tutorsCollections.find({}, queryOptions).toArray();
    
    return topRatedTutors;
}

export const getSinglePopularTutorData = async (id) => {
    const db = await DbConnect();
    const singleTutorCollection = db.collection('tutors');
    const query = {_id: new ObjectId(id)}
    // return query
    return singleTutorCollection.findOne(query);
}
