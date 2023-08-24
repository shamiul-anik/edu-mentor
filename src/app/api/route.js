import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server"

export const GET = async () => {
    const db = await DbConnect();
    const tutorsCollections = await db.collection('tutors');
    // return tutorsCollections.find({}).toArray();
    const sortingOptions = { year_completed: -1 }; // Use -1 for descending order
    const queryOptions = {
        sort: sortingOptions,
        limit: 4 // Specify the limit (in your case, 4)
    };
    
    const topRatedTutors = await tutorsCollections.find({}, queryOptions).toArray();
    
    
    return NextResponse.json(topRatedTutors);
}