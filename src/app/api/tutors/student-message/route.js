import { NextResponse } from "next/server";
import connect from "@/utils/db.js";
import {Student_Message} from "@/models/Student_Message"
// import { Users } from "@/models/Users"; 

export const POST = async (request) => {
  try {
    // Connect to the MongoDB database
    await connect();
    
    // Parse request body
    const { 
        tutor_email,
        student_name,
        student_email,
        student_mobile_no,
        subject_name,
        student_location,
        student_gender,
        class_name,
        details,
     } = await request.json();

    // check existing users
    const query = {
        student_email,
        tutor_email,
        subject_name,
        class_name

    };

    const user = await Student_Message.findOne(query);
    if(user){
      return new NextResponse({status: 400})
    }

    // Create a new user instance
    const newUsers = new Student_Message({
        tutor_email,
        student_name,
        student_email,
        student_mobile_no,
        subject_name,
        student_location,
        student_gender,
        class_name,
        details, });

    // Save the new user to the database
    const savedUsers = await newUsers.save();

    return new NextResponse({ message: "Users stored successfully!",
                               success: true,
                               savedUsers }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
