

export async function fetchCars() {
	const headers = {
            'X-RapidAPI-Key': '54b77f8434msh13a5463822eb9d3p1248d6jsnda888f4d6ab1',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?', {
    headers: headers,
});

const result = await response.json();

return result;
};