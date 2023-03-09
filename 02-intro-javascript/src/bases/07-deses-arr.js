// Desestructuracion de Arreglos

// const personajes = [ 'Angie', 'Ashley', 'Noslin'];
/* console.log(personajes[0]);
console.log(personajes[2]);
console.log(personajes[1]); */

// Desestructuracion para acceder a ua posicion
// Deberiamos poner la coma para que JS entienda que nos nos interan los otros valores
// solo el ultimo 
// const [ , , p3 ] = personajes;
// console.log( p3 );

// Creemos una Funcion
/* const retornArreglo = () =>{
    return ['ABC', 123];
}
 */
/* const arr = retornArreglo();
console.log(arr); */

// Desestructuramos los valores de la funcion
// const [letras, numeros] = retornArreglo();
// Pudiendo llamarlos o asignarlos a variables diferentes
// console.log(letras, numeros);

// Tarea
// 1. Primer valor del arr se llamara nombre
// 2. se llamara setNombre
const tareaState = (valor) =>{
    return [ valor, () =>{console.log('Hola Mundo')}];
}

// Manera Primitiva
// const arr = tareaState('Goku');
// console.log(arr[1]);
// arr[1]();
// Tarea Lista✅
const [ nombre, setNombre] = tareaState('Goku');
console.log( nombre );
setNombre();