const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=836199f7ca7e9de45ddefb348d84c993&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}