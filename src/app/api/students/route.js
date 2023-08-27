import { NextResponse } from "next/server"
import connect from "../../../utils/db"
import {Students} from "../../../models/Students"


export const  GET = async (request) => {
 
    try {
        await connect()
        const students = await Students.find()
        return new NextResponse(JSON.stringify(students), {status: 200})
    } catch (error) {
        return new NextResponse("Database Error!", {status: 500})
    }
}