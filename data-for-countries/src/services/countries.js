import axios from 'axios'

const getCountries = () => {
    const request = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
    return request.then(response => response.data)
}

const getWeather = (capital, countryCode) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const cityID = capital + ',' + countryCode;
    const request = axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&units=metric&appid=' + apiKey);
    return request.then(response => response.data)
}

export default { getCountries, getWeather }