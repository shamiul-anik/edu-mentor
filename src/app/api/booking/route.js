import connect from "@/utils/db.js"
import { NextResponse } from "next/server";
import { Bookings } from "../../../models/Bookings";

export const  POST = async (request) => {
    try {
       await connect()
       const {
        tutorId,
        name,
        email,
        phoneNumber,
        subject, 
        location, 
        salary, 
        detailsInfo} = await request.json()

        const query={
            email,
            tutorId
        }
        const bookingExists = await Bookings.findOne(query);
        console.log("api",bookingExists)
        if(bookingExists) {
            
         return NextResponse.json({ error: "Booking allready exists" }, { status: 404 });
        }

        const newBooking = new Bookings({
            tutorId,
            name,
            email,
            phoneNumber,
            subject, 
            location, 
            salary, 
            detailsInfo});

            const savedBooking = await newBooking.save();
            return NextResponse.json({ message: "Booking stored successfully!",
            success: true,
            savedBooking }, { status: 201 });


    } catch (error) {
        console.error("Database Error:", error.message);
        return NextResponse.error("Internal Server Error", { status: 500 });
    }
}