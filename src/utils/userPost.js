import React from 'react';


const userPost = async (userData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_fetch_data}/api/tutors`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
    
        if (response.ok) {
          console.log("User data submitted successfully");
        } else {
          console.error("Failed to submit user data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
};

export default userPost;