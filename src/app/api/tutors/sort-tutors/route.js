import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Tutors } from "@/models/Tutors";

export const GET = async (request) => {
  try {
    await connect();

    const sortingOptions = {
      students: -1, // Sort by students in descending order
      ratings: -1, // Then sort by ratings in descending order
      
    };
    const limit = 4;
    const tutors = await Tutors.find().sort(sortingOptions).limit(limit);

    return new NextResponse(JSON.stringify(tutors), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error message!", { status: 500 });
  }
};