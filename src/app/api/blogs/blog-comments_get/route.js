import { NextResponse } from 'next/server';
import Blog_comment_get from "../../../../models/Blog_comment_schema";
import connect from '../../../../utils/db';

export const GET = async (request) => {
    try {
        await connect();
        const blogs = await Blog_comment_get.find();
		return new NextResponse(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
		return new NextResponse("Database Error!", { status: 500 })
    }
} 