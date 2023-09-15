import connect from "@/utils/db.js";
// import { Tuitions } from "@/models/Users"
import {Tuitions} from "@/models/Tuitions";
import { NextResponse } from "next/server";
export const PATCH = async (request) => {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const controlAdminBtn = searchParams.get("controlAdminBtn");
    // const role = searchParams.get("role");
    console.log("admin route",id, controlAdminBtn);

    const query = {
      id
    };
    // all admin btn action
    console.log("query",query);
    if (controlAdminBtn == "approve") {
        const users = await Tuitions.findByIdAndUpdate( id,
            { isVerified: true },);
      return NextResponse.json({ users }, { status: 200 });
    }else if (controlAdminBtn == "deny") {
        const users = await Tuitions.findByIdAndUpdate( id,
            { isVerified: false },);
      return NextResponse.json({ users }, { status: 200 });
    }
  } catch (error) {
    console.error("Database Error:", error.message);
    return new NextResponse.error("Internal Server Error", { status: 500 });
  }
};