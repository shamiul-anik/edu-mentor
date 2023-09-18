import { NextResponse } from "next/server";
import connect from "@/utils/db.js";
import { Users } from "@/models/Users";
// import { Users } from "@/models/Users"; 

export const POST = async (request) => {
  try {
    // Connect to the MongoDB database
    await connect();
    
    // Parse request body
    const { displayName,mobileNumber, location, gender,qualification, isVerified, email,students, ratings, photoURL, role } = await request.json();

    // check existing users
    const query = {email};

    const user = await Users.findOne(query);
    if(user){
      return new NextResponse({status: 400})
    }

    // Create a new user instance
    const newUsers = new Users({  displayName, mobileNumber, location, gender,qualification, isVerified, students, ratings, email, photoURL, role });

    // Save the new user to the database
    const savedUsers = await newUsers.save();

    return new NextResponse({ message: "Users stored successfully!",
                               success: true,
                               savedUsers }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
