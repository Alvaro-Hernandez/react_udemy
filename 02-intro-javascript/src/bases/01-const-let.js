console.log("Hola Mundo!!");

//Variables y Constantes
//var ya no es necesario su uso

//const son variables que no se pueden cambiar o renombrar
const nombre = 'Alvaro';
const apellido = 'Hernandez';

// let si el dato de la variable va a cambiar
let valorDado = 5;
valorDado = 4;

//Veo en consola
console.log(nombre, apellido, valorDado);

//Datos en el scope
if(true){
    const nombre = 'Fernando';
    let valorDado = 6;
    console.log(nombre, valorDado);
}

console.log(valorDado);