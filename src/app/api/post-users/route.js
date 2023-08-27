import { NextResponse } from "next/server";
import connect from "@/utils/db.js";
import { User } from "@/models/Users"; 

export const POST = async (request) => {
  try {
    // Connect to the MongoDB database
    await connect();
    
    // Parse request body
    const { displayName, email, photoURL, role } = await request.json();
    console.log(displayName, email, photoURL, role);

    // check existing users
    const user = await User.findOne({email});
    if(user){
      return new NextResponse.json({error: "User already exists"}, {status: 400})
    }

    // Create a new user instance
    const newUser = new User({ displayName, email, photoURL, role });
    console.log(newUser);

    // Save the new user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({ message: "User stored successfully!",
                               success: true,
                               savedUser }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error.message);
    return NextResponse("Internal Server Error", { status: 500 });
  }
};
