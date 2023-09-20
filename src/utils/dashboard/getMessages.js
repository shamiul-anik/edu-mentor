import React from 'react';

const getMessages = async (queryName, email) => {
//     const fetchMessages = async () => {
//     try {
//         const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/get-messages?${queryName}=${email}`, {
//             cache: "no-store"
//         });
//         if (!res.ok) {
//             console.log(res)
//             throw new Error('Network response was not ok');
//           }

//         if(res.status === 200){
//             console.log("get-messages success")
//         }
//         const data = await res.json()
//         return data
        
//     } catch (error) {
//         console.error("get-messages error", error)
//     }
// }
//   fetchMessages()
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/get-messages?${queryName}=${email}`, {
        cache: "no-store"
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log("data", data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};


export default getMessages;