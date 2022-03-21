const { crearArchivoTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err=> console.log(err));


// const [,,arg3 = 'base=5'] = process.argv;
// const [,base]=arg3.split('=');

//const base = 3;