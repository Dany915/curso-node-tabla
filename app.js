const yargs = require('yargs');
const { crearArchivo } = require('./herlpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//console.log(argv.base);
crearArchivo(argv.b, argv.l, argv.h).then(name => console.log(name)).catch(err => console.log(err));




