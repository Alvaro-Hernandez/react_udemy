
//Desestructuracion de Objetos
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: "IronMan",
}

//Extra lo que tenga este objeto
// const {nombre, clave, edad} = persona;
//Muestro en pantalla
//console.log(nombre);
//console.log(clave);
// console.log(edad);

//Valores definidos
const userContext = ({nombre, clave, edad, rango='Capitan'}) =>{
    // console.log(nombre, clave, edad);
    return{
        nombreClave: clave,
        años: edad,
        latlg:{
            lat:12.212,
            lon:45.323,
        }
    }
};

//Desestructuracion
const {nombreClave, años, latlg:{lat, lon}} = userContext(persona);
//Imprimo en Consola
console.log(nombreClave, años);
console.log(lat, lon);