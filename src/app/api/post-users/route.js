import { NextResponse } from "next/server";
import connect from "@/utils/db.js";
import { Users } from "@/models/Users";
// import { Users } from "@/models/Users"; 

export const POST = async (request) => {
  try {
    // Connect to the MongoDB database
    await connect();
    
    // Parse request body
    const { displayName, email, photoURL, role } = await request.json();
    console.log(displayName, email, photoURL, role);

    // check existing users
    const user = await Users.findOne({email});
    if(user){
      return new NextResponse.json({error: "Users already exists"}, {status: 400})
    }

    // Create a new user instance
    const newUsers = new Users({ displayName, email, photoURL, role });
    console.log(newUsers);

    // Save the new user to the database
    const savedUsers = await newUsers.save();
    console.log(savedUsers);

    return NextResponse.json({ message: "Users stored successfully!",
                               success: true,
                               savedUsers }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error.message);
    return NextResponse("Internal Server Error", { status: 500 });
  }
};
