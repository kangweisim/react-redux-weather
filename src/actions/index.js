import axios from "axios";

const API_KEY = "0a59d58ec7a0a6b641eee18e4652bbd2";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},kr`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}