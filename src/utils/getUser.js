
const getUser = async (email) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-user?email=${email}`, { cache: "no-store" });

		if (!response.ok) {
			throw new Error('There were some errors while fetching!');
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