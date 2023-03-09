// Desestructuracion de Objetos

/* Asignacion desestructurante
    La sintaxis de desestructuración es 
    una expresión de JavaScript que permite 
    desempacar valores de arreglos o 
    propiedades de objetos en distintas variables.
*/

const persona = {
    nombre: 'Alvaro',
    edad: 25,
    clave: 'Ironman',
    // rango: 'Soldado'
};

// Aqui podemos crear una constante que extraiga los valores
// tomando el objeto como referencia, tambien podriamos colocar un nombre a la variable con el atributo
// de la siguiente forma {clave: clave2}
// const { edad, clave, nombre } = persona;

// console.log(edad, clave, nombre);
/* console.log(persona.edad);
console.log(persona.clave); */

const userContext = ({ clave, nombre, edad, rango = 'Capitan'}) =>{
    
    // console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.12313,
            lng: -12.41311
        }
    }
}

// const avenger =  userContext( persona );
// console.log( avenger );

// desestructuracion de objetos de objetos latlng: {lat, lng}
const {nombreClave, anios, latlng} = userContext( persona );
console.log(nombreClave, anios );

// Objeto dentro de otro objeto
// Tambien podemos hacer esta desestructuracion de la siguiente forma
const {lat, lng} = latlng;
console.log(lat, lng);