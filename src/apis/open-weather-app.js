import axios from 'axios';

axios.defaults.baseURL= 'https://api.openweathermap.org/data/2.5/'

function getCurrentWeather(location, date) {
    return axios.get(
    `weather?q=${location}&units=imperial&appid=ebbf488196e56baede0de5cc31fdb785`
    );
}

function getForecast(lat, lon){
    return axios.get(
    `onecall?lat=${lat}&lon=${lon}&units=imperial&appid=ebbf488196e56baede0de5cc31fdb785`
    )

}




export {
    getCurrentWeather,
    getForecast
}