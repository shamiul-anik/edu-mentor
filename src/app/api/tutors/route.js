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
return NextResponse.ok();
}

// import Cors from 'cors';
// import DbConnect from "@/services/DbConnect";
// import { NextResponse } from "next/server";

// // Initialize the cors middleware
// const cors = Cors({
//   origin: 'http://localhost:3000', // Replace with your frontend domain url
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// });

// // Helper method to run the cors middleware
// // You can use this to apply cors to any API route
// async function applyCorsMiddleware(req, res) {
//   return new Promise((resolve, reject) => {
//     cors(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }

// export const GET = async (request) => {
//   // Apply the cors middleware to the request
//   await applyCorsMiddleware(request.req, request.res);

//   const db = await DbConnect();
//   const tutorsCollectiions = await db.collection('tutors');
//   const tutors = await tutorsCollectiions.find({}).toArray();

//   return NextResponse.json(tutors);
// };

// export const POST = async (request) => {
//   // Apply the cors middleware to the request
//   await applyCorsMiddleware(request.req, request.res);

//   const db = await DbConnect();
//   const body = await request.json();
//   const userCollections = await db.collection('users');
//   userCollections.insertOne(body);

//   return NextResponse.ok();
// };
