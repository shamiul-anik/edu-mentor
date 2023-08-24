import DbConnect from "@/services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async (request) =>{
// console.log(request.cookies, request.headers);
const db = await DbConnect();
const tutorsCollectiions = await db.collection('tutors');
const tutors = await tutorsCollectiions.find({}).toArray();

return NextResponse.json(tutors);
}

export const POST = async (request) => {
    const db = await DbConnect();
    const body = await request.json();
    const userCollections = await db.collection('users');
    userCollections.insertOne(body);
    
}