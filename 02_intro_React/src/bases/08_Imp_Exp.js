//1 Metodo para importar un archivo
// import { heroes } from './data/heroes.js';
//2 Metodo para importar usan la abreviation "imp"
// import {heroes} from './data/heroes.js';
//3 Metodo para importar con el nombre de la exportacion del archivo, nota: (Aveces funciona o aveces no, solo hay que entrar y cerrar el archivo de exportacion)
import owner,{ heroes } from "../data/heroes";


//Realizando una funcion que retorna un campo en el arreglo en dado caso que lo encuentre si no sera "Falsa" Array.prototype.find()
const getHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id === id);
}
//Imprimir en consola
console.log(getHeroeById(1));

//Funcion que filtra la informacion de un arreglo segun el parametro dado
const getHeroeByOwner = (owner) => {
    return heroes.filter((heroes) => heroes.owner === owner);  
}
//Imprimir en consola pero en tabla
console.table(getHeroeByOwner('DC'));
console.table(getHeroeByOwner('Marvel'));

console.log(owner);

