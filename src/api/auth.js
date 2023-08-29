import axios from "axios"

// Saving User Information to Database
export const saveUser = (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    photo_url: user.photoURL,
    role: "student"
  };
  // console.log("User Data from User Parameter", user);
  console.log("User from Save User", currentUser);

  axios.put(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, currentUser)
  .then((data) => console.log("Data of Saved User", data));
}

// Using Fetch
// export const saveUser = (user) => {
//   const currentUser = {
//     email: user.email,
//   };

//   fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(currentUser),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// Get User Role
// export const getRole = async (email) => {
//   const data = await axios(`${import.meta.env.VITE_API_URL}/users/${email}`);
//   const role = data?.data.role;
//   // console.log(role);
//   // console.log(data?.data?.role);
//   return role;
// }
// export const getRole = async (email) => {
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
//   const user = await response.json()
//   console.log("from auth", user);
//   // return [user?.role]
// }
