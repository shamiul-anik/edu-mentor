
const getUser = async (email) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-user?email=${email}`);
        
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


export default getUser;