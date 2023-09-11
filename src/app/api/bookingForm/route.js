import connect from "@/utils/db.js"
import { NextResponse } from "next/server";
import { BookingForm } from "../../../models/BookingForm";
export const  POST = async (request) => {
    try {
       await connect()
       const {
        name,
        email,
        phoneNumber,
        subject, 
        location, 
        salary, 
        detailsInfo} = await request.json()

        const newBooking = new BookingForm({
            name,
            email,
            phoneNumber,
            subject, 
            location, 
            salary, 
            detailsInfo});

            const savedBooking = await newBooking.save();
            return NextResponse.json({ message: "Users stored successfully!",
            success: true,
            savedBooking }, { status: 201 });


    } catch (error) {
        console.error("Database Error:", error.message);
        return NextResponse("Internal Server Error", { status: 500 });
    }
}