
const  person = {
    nombre: 'John',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55521321,
        lat:12.225,
        lng:34.254
    }
};

console.log(person);

//Para hacer un Clon del Objeto es: (...)ç
const person2 = {...person};
person2.apellido = 'Martinez';

//Imprime en consola el Clon del Objeto
console.log(person2);

//Imprime una Tabla en la Consola 
// console.table(person);

 