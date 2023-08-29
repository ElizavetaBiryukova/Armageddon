import { error } from "console";

export async function getAsteroids() {
    const API_KEY = 'ZCGuGCtMddGab7STNs8RhetkPefDJsLeg0GANCzB';
    const startDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=2023-08-30&api_key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Не удалось получить астероиды')
    }

    const data = await response.json();
    return data;
}

