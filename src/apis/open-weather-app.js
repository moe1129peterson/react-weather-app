import axios from 'axios';


function getCurrentWeather(location) {
    return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ebbf488196e56baede0de5cc31fdb785`
    );
}

export {
    getCurrentWeather
}