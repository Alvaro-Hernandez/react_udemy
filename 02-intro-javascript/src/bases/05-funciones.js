// Funciones en JS

// Forma normal de declarar una funcion
/* function saludar(nombre){
    return `Hola, ${nombre}`;
}
*/


// Ahora crearemos otra forma de crear una funcion
// De forma que al declararla a una funcion const no puede ser mutada en si
/* const saludar = function(nombre){
    return `Hola, ${nombre}`;
} */

// console.log(saludar('Meyling'));

// console.log( saludar('Goku') );

// Funcion de flecha
/* const nombre = (nombre) =>{
    return `Hola, ${nombre}`;
}  */

// Aqui veremos lo que nos devuelve
/* console.log( nombre('Alvaro') );  */

// Una de sus ventajas se centra a la forma cuando
// Lo unico que hace nuestra funcion es retornar algo podemos simplificar
// la funcion .
// const nombre2 = (nombre) => `Hola, ${nombre}`;

// Observemos en la consola
// console.log( nombre2('Leonardo') );

// Importante para mostrar un objeto en un arrow function
// quitando el return deberiamos declararlo de manera implicita
//  de la siguiente forma:

/* const getUser = () => ({
    id:'12345',
    usernames: 'Curalacho22'
}); */

// ahora si vamos a imprimirlo deberia funcionar
// console.log( getUser() );

// tambien podemos declarar un objeto de esa funcion
// const user = getUser();
// para luego imprimirlo
// console.log(user);

// Tarea
// Codigo primitivo
/* function getUsuarioActivo( nombre ) {
    return{
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo( 'Fernando' );
console.log(usuarioActivo); */

// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
}); 

const usuario = getUsuarioActivo( 'Angie' );

console.log( usuario );

