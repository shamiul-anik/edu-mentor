import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Payments } from "@/models/Payments";

export const GET = async (request) => {
	try {
		await connect();
		const { searchParams } = new URL(request.url);
		const transactionID = searchParams.get("transactionID");

		// console.log(transactionID);

		// const regularId = mongoose.Types.ObjectId(transactionID);
		
		if(transactionID) {
			// console.log("Inside if: ", transactionID);
			// const paymentStatusUpdate = await Payments.updateOne(transactionID, {
      //   payment_status: true,
      // });

			const paymentStatusUpdate = await Payments.findOneAndUpdate(
        { transactionID: transactionID },
        { $set: { payment_status: true } },
        { new: true } // This option returns the updated document
      );
		
			// console.log(paymentStatusUpdate);
			// if (paymentStatusUpdate) {
        // Return a 307 Temporary Redirect response
        return new NextResponse(null, {
          status: 307,
          headers: {
            Location: "http://localhost:3000/dashboard/",
          },
        });
      // }

			// if(paymentStatusUpdate) {
			// 	const response = NextResponse.json(
      //     { paymentStatusUpdate },
      //     { status: 200 }
      //   );
      //   response.redirect("http://localhost:3000/dashboard/");
			// }
		}
	}
	catch (error) {
		console.error("Database Error: ", error.message);
		return new NextResponse.error("Internal Server Error!", { status: 500 });
	}
};