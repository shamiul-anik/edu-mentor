import { NextResponse } from "next/server"
import connect from "@/utils/db"
import {Tutors} from "@/models/Tutors"

export const  GET = async (request) => {
 
    try {
        await connect()
        const tutors = await Tutors.find()
        return new NextResponse(JSON.stringify(tutors), {status: 200})
    } catch (error) {
        return new NextResponse("Database Error message!", {status: 500})
    }
}