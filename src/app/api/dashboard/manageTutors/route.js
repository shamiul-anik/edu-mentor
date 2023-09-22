import connect from "@/utils/db.js";
import Tutor_request from "../../../../models/Tutor_request";
import { NextResponse } from "next/server";
export const PATCH = async (request) => {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const controlAdminBtn = searchParams.get("controlAdminBtn");
    const feedback = searchParams.get("feedback");
    // const role = searchParams.get("role");
    // console.log("manage tutors route",id, controlAdminBtn);

    const query = {
      id
    };
    const query2 = {

    }
    // all admin btn action
    // console.log("query",query);
    console.log("20", feedback)
    if(feedback){
      query2.admin_feedback = feedback;
    }
    console.log("20 ", query2)
    const hasValidQuery = Object.keys(query2).length > 0;
    if(hasValidQuery){
      console.log("manageTutors", query)
      const tutorRequest = await Tutor_request.findByIdAndUpdate( id, query2 );
  return NextResponse.json({tutorRequest }, { status: 200 });
    }
    
    if (controlAdminBtn == "approve") {
        const tutorRequest = await Tutor_request.findByIdAndUpdate( id,
            { isVerified: true });
      return NextResponse.json({tutorRequest }, { status: 200 });
    }else if (controlAdminBtn == "deny") {
        const tutorRequest = await Tutor_request.findByIdAndUpdate( id,
            { isVerified: false });
      return NextResponse.json({ tutorRequest }, { status: 200 });
    }
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse.error("Internal Server Error", { status: 500 });
  }
};