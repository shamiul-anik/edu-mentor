"use client"
import { toast } from "react-hot-toast";

const saveUser = async (userData) => {

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post-users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});

		// console.log(response);
		if (response.ok) {
			// console.log(response);
			toast.success("User information added successfully!");
		} else if (response.status === 500 || response.status === 400) {
			toast("User exists!")
		}
		else {
			toast.error("Fetch error!")
		}
	} catch (error) {
		toast.error("An error occurred: ", error);
	}
};

export default saveUser;
