import DbConnect from '@/services/DbConnect'
import { ObjectId } from 'mongodb';
import 'server-only';
export const getPopularTutorFromDb = async () => {
    const db = await DbConnect();
    const tutorsCollections = await db.collection('tutors');
    // return tutorsCollections.find({}).toArray();
    const sortingOptions = { year_completed: -1 }; // Use -1 for descending order
    const queryOptions = {
        sort: sortingOptions,
        limit: 4 // Specify the limit (in your case, 4)
    };
        const someTutors = await tutorsCollections.find({}, queryOptions).toArray();  
        const cleanedTutorsData =  someTutors.map(tutor => {
            const { _id, ...otherProps } = tutor; // Remove _id property
            return { ...otherProps, _id: _id.toString() }; // Convert _id to string
        });
        return cleanedTutorsData;   
}

export const tutorsAllData = async () => {
    try {
        const db = await DbConnect();
        const tutorsCollection = await db.collection('tutors');
        const allTutors = await tutorsCollection.find({}).toArray();

        // Clean up data before sending
        const cleanedTutorsData = allTutors.map(tutor => {
            const { _id, ...otherProps } = tutor; // Remove _id property
            return { ...otherProps, _id: _id.toString() }; // Convert _id to string
        });

        return cleanedTutorsData;

        
    } catch (error) {
        console.error('getPopularTutorFromDb',error);  
    }
}







export const getSinglePopularTutorData = async (id) => {
    const db = await DbConnect();
    const singleTutorCollection = db.collection('tutors');

    // // Ensure that the provided id is a valid ObjectId
    // if (!ObjectId.isValid(id)) {
    //   return  console.log('Invalid ObjectId format');
    // }
   if(id ){
    const query = { _id: new ObjectId(id) };
    return singleTutorCollection.findOne(query);
   }else{
    console.log('id is not define')
   }

};
// const userData ={
//     "name": "hello",
//     "email": "hello@example.com"
// }
// export const updateDatabase = async (userData) => {

//     const db = await DbConnect();
//     const userCollections = db.collection('users');
//     const existingUser = await userCollections.findOne({ _id: userData._id });

// if (existingUser) {
//     // Document with the same _id already exists, handle accordingly
//     console.log('same id')
// } else {
//     // Insert the new document
//     try {
//         const result = await userCollections.insertOne(userData);
//         console.log('Data inserted:', result);
//     } catch (error) {
//         console.error('Error inserting data:', error);
//     }
// }
    
    
   
// }

// export const tutorsAllData = async () => {
//     const db = await DbConnect();
// const tutorsCollectiions = await db.collection('tutors');
// return tutorsCollectiions.find({}).toArray();
  
// }
