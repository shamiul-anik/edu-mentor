import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { to, subject, message, from } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptionTo = {
      to,
      subject: "EduMentor - Contact Confirmation",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>EduMentor - Contact Confirmation</title>
          <style>
            /* Add your CSS styles here */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #005e6b; /* Teal-900 background */
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #00796b; /* Teal-600 */
              color: #fff;
            }
            td {
              background-color: #f3f3f3;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="text-3xl font-semibold text-gray-800">EduMentor - Contact Confirmation 😊</h1>
            <p class="text-lg text-gray-700">A tutor will contact you very soon.</p>
            <h2 class="text-2xl font-semibold text-gray-800">You sent the following email to EduMentor:</h2>
            <table>
              <tr>
                <th>Title</th>
                <td>${subject}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td>${message}</td>
              </tr>
            </table>
            <h1>Thank you so much for contacting us</h1>
          </div>
        </body>
        </html>
      `,
    };
    
    const mailOptionFrom = {
      to: "mamun.bbn.bd@gmail.com",
      subject: "EduMentor - New Contact",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>EduMentor - New Contact</title>
          <style>
            /* Add your CSS styles here */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #005e6b; /* Teal-900 background */
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #00796b; /* Teal-600 */
              color: #fff;
            }
            td {
              background-color: #f3f3f3;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="text-3xl font-semibold text-gray-800">EduMentor - New Contact</h1>
            <p class="text-lg text-gray-700">You've received a new contact email from ${from}.</p>
            <p class="text-lg text-gray-700">Please contact them soon.</p>
            <table>
              <tr>
                <th>Title</th>
                <td>${subject}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td>${message}</td>
              </tr>
            </table>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email to the "to" address
    await transporter.sendMail(mailOptionTo);

    // Send the email to the "from" address
    await transporter.sendMail(mailOptionFrom);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
