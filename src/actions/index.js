import axios from 'axios';

const API_KEY = '186e7df81ebd06f829da3ed2aab354e0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?lang=ru&units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},ru`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}