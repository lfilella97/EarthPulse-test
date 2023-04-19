export const fetchData = async () => {
	const response = await fetch(`http://localhost:3001/geo-data`);
	return await response.json();
};
