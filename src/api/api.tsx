export async function getAsteroids() {
    const API_KEY = 'ZCGuGCtMddGab7STNs8RhetkPefDJsLeg0GANCzB';
    const startDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=2023-08-31&api_key=${API_KEY}`);

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

