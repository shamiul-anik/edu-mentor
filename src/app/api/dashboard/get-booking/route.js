import connect from "@/utils/db.js";
import { Bookings } from "../../../../models/Bookings";
import { NextResponse } from "next/server";
export const GET = async (request) => {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const tutorId = searchParams.get("tutorId");

    const query = {
      tutorId,
    };
    console.log(query);
    if (query) {
      const bookingData = await Bookings.find(query);
      return NextResponse.json({ bookingData }, { status: 200 });
    }
  } catch (error) {
    console.error("Database Error:", error.message);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
};
