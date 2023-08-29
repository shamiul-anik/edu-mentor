import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Tutors } from "@/models/Tutors";
import tutor from "../../../../public/tutor.json"

export const POST = async (request) => {
    try {
        await connect();

        // Delete all data from the collection
        await Tutors.deleteMany({});

        // Add new data to the collection
        const newTutorsData = [
            // An array of new tutor objects
            // ...
            tutor
        ];
        await Tutors.create(newTutorsData);

        return new NextResponse("Data deleted and new data added.", { status: 200 });
    } catch (error) {
        return new NextResponse("Database Error!", { status: 500 });
    }
};
