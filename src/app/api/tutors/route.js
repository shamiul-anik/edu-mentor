import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Tutors } from "@/models/Tutors";


export const GET = async (request) => {
  try {
    await connect();
    const {searchParams} = new URL(request.url);
    const gender = (searchParams.get("gender"))
    const premium = (searchParams.get("premium"))
    // console.log(gender,premium)

    

    // Get query parameters from the request
    // const { email } = request.json();
    // console.log(email)
    


    // Create a filter object based on the provided query parameters
    const filter = {};

    if (gender === 'male' || gender === "female") {
      filter.gender = gender;
    }

    if (premium === "done") {
      filter.premium = premium;
    }
    console.log(filter)
    // Check if both gender and premium are not provided in the query parameters
    if (!gender && !premium) {
      // If both are not provided, find all tutors without any filters
      const tutors = await Tutors.find();
      return new NextResponse(JSON.stringify(tutors), { status: 200 });
    }

    // Use Mongoose to find tutors based on the filter
    const tutors = await Tutors.find(filter);

    return new NextResponse(JSON.stringify(tutors), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};
