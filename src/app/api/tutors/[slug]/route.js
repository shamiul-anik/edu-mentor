import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Tutors } from "@/models/Tutors";
import mongoose from 'mongoose'; // Import mongoose

export const GET = async (request, { params }) => {
  try {
    await connect();
    // console.log(params)

    const { slug } = params; // Extract the tutor's id from the URL parameters
    if(slug){
      // console.log('slug show',slug)
      // return {};
    }
    const tutorId = slug; // Replace with the actual _id value
    const tutor = await Tutors.findOne({ _id: tutorId.toString() });
    


    if (!tutor) {
      return new NextResponse("Tutor not found", { status: 404 });
    }
    // console.log("Tutor Data:", tutor);
    return new NextResponse(JSON.stringify(tutor), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error message!", { status: 500 });
  }
};
