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
    const query = { email };

    // Find the user by email
    if (query.email !== null) {
      const user = await Users.findOne(query);
      console.log(user);
      return new NextResponse(JSON.stringify(user), { status: 200 });
    } else if (query.email === null) {
      return new NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
