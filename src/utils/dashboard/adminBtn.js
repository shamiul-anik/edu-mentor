import React from 'react';
import Swal from "sweetalert2";
const adminBtn = (dataValue , value) => {
    // console.log(data._id, value)
    // console.log(data._id, value)
    const fetchAdminBtn = async () => {
		  try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/admin?id=${dataValue?._id}&controlAdminBtn=${value}`, {
        method: "PATCH",
      },
			{
			  cache: 'no-store'
			});
      if (res.status === 200) {
        // Successful response, handle data accordingly
        // setAllUsers(data);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: "User Action successfully",
          showConfirmButton: false,
          timer: 1500
        })
        console.log("User admin action successfully")
        
      }
			const data = await res.json();
      console.log(data)

			
		  } catch (error) {
			console.error('Error fetching All userdata:', error);
		   
		  }
		};
	
		fetchAdminBtn();
};

export default adminBtn;