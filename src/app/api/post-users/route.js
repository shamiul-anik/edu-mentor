import { NextResponse } from "next/server";
import connect from "../../../utils/db.js";
import { Users } from "../../../models/Users.js"; 

export const POST = async (request) => {
  try {
    // Connect to the MongoDB database
    await connect();

    const { userInfo } = request.body;

    if (!userInfo) {
      return new NextResponse("Missing user information", { status: 400 });
    }

    const { displayName, email, role, photoURL } = userInfo;

    // Validate the data before creating a new user
    if (!displayName || !email || !role || !photoURL) {
      return new NextResponse("Invalid user data", { status: 400 });
    }

    // Create a new user instance
    const newUser = new Users({ displayName, email, photoURL, role });

    // Save the new user to the database
    const savedUser = await newUser.save();

    return new NextResponse(JSON.stringify(savedUser), { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
