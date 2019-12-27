const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    direccion = argv.direccion;
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determina el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);


//clima.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log);

// voy a la seccion 7!!!