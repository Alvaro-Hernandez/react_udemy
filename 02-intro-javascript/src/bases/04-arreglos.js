// Arreglos en JS
// Declarar un arreglo de esta forma esta permitido cuando vamos
// a definir un numero de elementos a guardar pero que aun es mutable
// const arreglo = new Array( 50 );

//Otra forma de hacerlo es la siguiente
const arreglo = [1,2,3,4];
// usar el push no es tan recomendable por que modifica el arreglo principal
// Cuando queramos insertar algo a nuestro arreglo sera con el spread
// arreglo.push( 1 );
// arreglo.push( 2 );
// arreglo.push( 3 );
// arreglo.push( 4 );

// reto de añadir algo a nuestro arreglo
// Listo ✅
let arreglo2 = [...arreglo, 5];

// Mapeo de arreglo con funcion callback, creando un nuevo arreglo
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );