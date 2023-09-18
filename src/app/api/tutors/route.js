import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Users } from "@/models/Users";


export const GET = async (request) => {
  try {
    await connect();
    const {searchParams} = new URL(request.url);
    const gender = (searchParams.get("gender"))
    const isVerified = (searchParams.get("isVerified"))
    // console.log(gender,premium)

    

    // Get query parameters from the request
    // const { email } = request.json();
    // console.log(email)
    


    // Create a filter object based on the provided query parameters
    const filter = {
      role: "tutor"
    };

    if (gender === 'male' || gender === "female") {
      filter.gender = gender;
    }

    if (isVerified === "true") {
      filter.isVerified = true;
    }
    console.log(filter)
    // Check if both gender and premium are not provided in the query parameters
    if (!gender && !isVerified) {
      // If both are not provided, find all tutors without any filters
      const tutors = await Users.find(filter);
      return new NextResponse(JSON.stringify(tutors), { status: 200 });
    }

    // Use Mongoose to find tutors based on the filter
    const tutors = await Users.find(filter);

    return new NextResponse(JSON.stringify(tutors), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
