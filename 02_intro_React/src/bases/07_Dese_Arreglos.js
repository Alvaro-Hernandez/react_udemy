//F2 para cambiar las referencia de datos
//Desestructuracion de arreglosr
const personajes = ['Alvaro', 'Jess', 'Eliab'];

//Mostrar datos de manera tradicional
// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

//Desestructuracion por espacios en el arreglo, cada indica la ignoracion de los campos en un arreglo
// const [ , , p2] = personajes;
// console.log( p2);

//Funcion

// const return_Arreglo = ()=>{
//     return['ABC', 123]
// }

// const [letras, numero] = return_Arreglo();
// console.log( letras, numero );

//Tareas

const user_State = ( valor ) =>{
    return [ valor , ()=>{
        console.log( 'Hola Mundo')
    }];
}

const [nombre, setNombre] = user_State('Moreno');
// console.log( arr2);
// arr2[1]();

console.log(nombre);
setNombre();
