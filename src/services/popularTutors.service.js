import DbConnect from '@/services/DbConnect'
import 'server-only'
export const getPopularTutorFromDb = async () => {
    const db = await DbConnect();
    const tutorsCollections = await db.collection('tutors');
    return tutorsCollections.find({}).toArray();
}