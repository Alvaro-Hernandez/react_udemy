//Template String

const nombre   = 'Alvaro';
const apellido = 'Hernandez';


// Manera tradicional de concatenar datos
// const nombreCompleto = nombre + ' ' + apellido;

// Template String con Backtick (AltGr + } } )
// Esto me permite a mi poder escribir Javascript

const nombreCompleto = `
${nombre} 
${apellido}
${1+2}
`;

console.log(nombreCompleto);

// Probemos esto en una funcion
// Aqui observaremos como podemos usar el formato tradiciona junto al template String

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);