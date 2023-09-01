export async function getAsteroids(startDate: string) {
    const API_KEY = 'ZCGuGCtMddGab7STNs8RhetkPefDJsLeg0GANCzB';

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    const endDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Не удалось получить астероиды')
    }

    const data = await response.json();
    return data;
}

export async function getAsteroid(id: string) {
    const API_KEY = 'ZCGuGCtMddGab7STNs8RhetkPefDJsLeg0GANCzB';

    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Не удалось получить астероид')
    }

    const data = await response.json();
    return data;
}

