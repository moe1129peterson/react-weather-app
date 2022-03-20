import axios from 'axios';


function getCurrentWeather(location) {
    return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ebbf488196e56baede0de5cc31fdb785`
    );
}

export {
    getCurrentWeather
}