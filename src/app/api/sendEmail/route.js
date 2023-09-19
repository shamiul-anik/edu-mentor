import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const {to, from, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.NODEMAILER_EMAIL,
              pass: process.env.NODEMAILER_PASSWORD,
            }
        })

        const mailOption = {
            from: "mamun.bbn.bd@gmail.com",
            to,            
            subject: "EduMentor",
            html: `              
                <h1> title: ${subject}</h1>
                <h3> message: ${message}</h3> 
                <p>This is the message from your tutor </p>
                <p>Fell free to contact me with your requirement</p>                
                `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}