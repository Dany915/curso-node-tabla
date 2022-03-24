const { rejects, throws } = require('assert');
const fs = require('fs'); //Importar archivos
const { resolve } = require('path');
const colors = require('colors/safe');

const crearArchivo = async( base = 5, listar, limite = 5 ) =>{
    let cont=1;
    let salida = '', consola = '';

    
        
        while(cont <= limite){    
            salida += `${base} x ${cont} = ${base * cont }\n`;
            consola += `${colors.blue(base)} ${colors.red('x')} ${colors.magenta(cont)} = ${base * cont }\n`;
            cont++;
        }    
            
        if(listar){
            console.log(colors.green('======================='));
            console.log(colors.rainbow(`Tabla del: ${base}`));
            console.log(colors.cyan('======================='));
            console.log(consola);
        }
    
        try {
            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
            return 'Creado!!!';
        } catch (err) {
            throw err;
        } 
    
    
}

module.exports = {
    crearArchivo
}