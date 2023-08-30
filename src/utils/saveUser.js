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

        if (response.ok) {
            console.log(response);
            toast.success("User data stored successfully");
        } else if (response.status === 400) {
            toast.error("User already exists!")
        }
        else {
            toast.error("Fetch error")
        }
    } catch (error) {
        toast.error("An error occurred:", error);
    }
};

export default saveUser;
