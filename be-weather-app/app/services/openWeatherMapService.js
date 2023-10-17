const axios = require('axios');

exports.getWeather = (city) => {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=2466213f21b4b723d341e00a430a7673');
}