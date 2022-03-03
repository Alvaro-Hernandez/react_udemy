

// Arreglo en JSON
//const arr = new Array(100);

const arreglo = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arreglo2 = [...arreglo, 5];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

//Funcion map que duelve un nuevo arreglo segun lo que le ordenmos a la funcion que haga con cada uno de sus valores
const arreglo3 = arreglo2.map(function(x){
    return x * 2;
});

//La función math. sqrt devuelve la raíz cuadrada del número pasado como argumento.
const arreglo4 = arreglo2.map(function(num){
    return Math.sqrt(num);
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);