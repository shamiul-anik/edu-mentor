import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (request) => {
  try {
    const { email } = await request.json();
    // console.log(email);

    if (!email) {
      // console.log('in block');
      const response = NextResponse.json({
        message: "Logged out",
        success: true,
      });
      response.cookies.set('token', "", { httpOnly: true, expires: new Date(0) });
      return response;
    }

    // Token payload should be an object or string, not just the email
    const tokenPayload = { email: email };

    // Create token
    const token = await jwt.sign(tokenPayload, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: 60 * 60 * 60 });
    // console.log(token);

    // Create a JSON response with your data
    const response = NextResponse.json({
      message: "Token created",
      success: true,
    });
    // console.log(response, token);

    // Set the token as a cookie
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
