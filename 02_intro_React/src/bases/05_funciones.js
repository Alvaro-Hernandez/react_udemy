

//Funciones en JSON 
const saludar = function saludar ( nombre){
    return `Hola, ${nombre}`;
}

//Funcion de Flecha de
const saludar2 = ( nombre) =>{
    return `Hola, ${nombre}`;
}

// console.log(saludar2('VEGETA'));
// console.log(saludar('GOKU'));

//Funcion Nuevo de flecha
const saludar3 = (nombre) => `Hola, ${nombre}`;
// console.log(saludar3('Argumento'));

const saludar4 = (nombre) => `Hola Mundo`;
// console.log(saludar4());

//funcion de flecha o arrow function
//que retorna un Objeto Implicito
const getUser = () => ({
    id: 'ABC',
    username: 'Maria_Rica1235'
})

// console.log(getUser);

//Tambien para mas facil de leer

// const User = getUser;

// console.log(User);

function getUsarioActivo (nombre){
    return {
        uid: 'AMADASD12',
        username: nombre
    }
}

const UsarioActivo = getUsarioActivo('Fernando');
console.log(UsarioActivo);

//Tareas
//1. Transformar esta funcion a funcion de flecha
//2. Tiene que retornar un objeto implicito
const userActivo = (nombre) =>({
    uid: 'AMADASD12',
    username: nombre,
})
//3. Pruebas
console.log(userActivo('Fernando'));


