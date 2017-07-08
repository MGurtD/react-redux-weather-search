import axios from 'axios';
const API_KEY = '1ba303b4fc0116592284c2d60474edba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    console.log('FETCH_WEATHER url: ', url);
    console.log('FETCH_WEATHER request: ', request);

    return {
        type : FETCH_WEATHER,
        payload : request
    };

}