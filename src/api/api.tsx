import { error } from "console";

export async function getAsteroids() {
    const API_KEY = 'SPj9srwD9QsnbC5s8QEP4BBPUbkECaycm2kfeTeL';
    // const startDate = new Date().toLocaleDateString('en-ca');

    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-28&end_date=2023-08-30&api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Не удалось получить астероиды')
    }

    const data = await response.json();
    return data;
}

