// import SSLCommerzPayment from "sslcommerz-lts";
import { NextResponse } from "next/server";
import { uid } from "uid";
const SSLCommerzPayment = require('sslcommerz-lts');
import "dotenv/config";
import connect from "@/utils/db";
import { Payments } from "@/models/Payments";

export async function POST(request) {
	try {
    const {
      tuitionId,
      tutor_name,
      tutor_email,
      payment_amount,
      subject_name,
      class_name,
      student_name,
      student_email,
      student_location,
      student_mobile_number,
      payment_status,
      payment_month,
    } = await request.json();
    // console.log("payment: ", payment);
		const transactionID = uid(25);

		const payment = {
      transactionID: transactionID,
      tuitionId: tuitionId,
      tutor_name: tutor_name,
      tutor_email: tutor_email,
      subject_name: subject_name,
      class_name: class_name,
      student_name: student_name,
      student_email: student_email,
      payment_amount: payment_amount,
      student_mobile_number: student_mobile_number,
      student_location: student_location,
      payment_status: payment_status,
      payment_month: payment_month,
    };

    const newPayment = new Payments(payment);

    const savedPaymentInformation = await newPayment.save();

		const paymentID = savedPaymentInformation._id;

    const data = {
      total_amount: payment_amount,
      currency: "BDT",
      tran_id: transactionID, // use unique tran_id for each api call
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/ssl-payment/success?transactionID=${transactionID}`,
      fail_url: `${process.env.NEXT_PUBLIC_API_URL}/ssl-payment/fail?transactionID=${transactionID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/ssl-payment/cancel`,
      ipn_url: `${process.env.NEXT_PUBLIC_API_URL}/ssl-payment/ipn`,
      // subject_name: subject_name,
      product_name: subject_name,
      product_category: class_name,
      // class_name: class_name,
      // student_name: student_name,
      cus_name: student_name,
      cus_email: student_email,
      cus_phone: student_mobile_number,
      // student_mobile_number: student_mobile_number,
      student_location: student_location,
      student_country: "Bangladesh",
      tuitionId: tuitionId,
      tutor_name: tutor_name,
      tutor_email: tutor_email,
      payment_status: payment_status,
      payment_month: payment_month,
      shipping_method: "No",
      ship_name: student_name,
      product_profile: "general",
    };

		// try {
		await connect();

		

			// const response = NextResponse.json(
			// 	{
			// 		message: "Payment information added successfully!",
			// 		success: true,
			// 		savedPaymentInformation,
			// 	},
			// 	{ status: 201 }
			// );

			// return response;
		// } catch (error) {
		// 	console.error("Database Error: ", error.message);
		// 	return new NextResponse("Internal Server Error!", { status: 500 });
		// }

    // console.log("Payment Details: ", data);
		// console.log("Store Pass: ", process.env.SSLCOMMERZ_STORE_PASSWORD);
    const store_id = process.env.SSLCOMMERZ_STORE_ID; 
    const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD;
    const is_live = false; // true for live, false for sandbox

		// console.log("Store ID: ", store_id);
		// console.log("Store Password: ", store_passwd);

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

		// console.log("sslcz: ", sslcz);

    try {
      const apiResponse = await sslcz.init(data);
      const GatewayPageURL = apiResponse.GatewayPageURL;
			// console.log("GatewayPageURL: ", GatewayPageURL);
			return NextResponse.json(
        { url: GatewayPageURL, payment: savedPaymentInformation },
        { status: 200 }
      );
    } 
		catch (error) {
      console.error("Error initiating payment: ", error);
      return NextResponse.json(
        { message: "Failed to initiate payment!" },
        { status: 500 }
      );
    }

    // return NextResponse.json(
    //   { message: "Payment successful!" },
    //   { status: 200 }
    // );
  }
	catch (error) {
		return NextResponse.json(
      { message: "Failed to initiate payment!" },
      { status: 500 }
    );
	}
}