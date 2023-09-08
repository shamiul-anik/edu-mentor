import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import { Users } from "../../../models/Users";

export const GET = async (request, response) => {
  try {
    // Connect to the MongoDB database
    await connect();
    
    // Get the email parameter from the query string
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    console.log(email);

    // Find the user by email
    const user = await Users.findOne({ email });
    console.log(user);
    if (!user) {
      return new NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
