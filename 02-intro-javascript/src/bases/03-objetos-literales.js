// Objetos Literales

const persona = {
    nombre: 'Angie',
    apellido: 'Ceneno',
    edad: 45,
    direccion:{
        ciudad: 'Acoyapa',
        zip: 505,
        lat: 12.223,
        lng: 10.225,
    }
};

// console.table( persona );
console.log( persona );


// Asignacion de referencias
/* const persona2 = persona;
persona2.nombre = 'persona';
console.log( persona2 ); */

// Clonar
// ... => operador spread
const persona2 = { ...persona}
console.log( persona2 );