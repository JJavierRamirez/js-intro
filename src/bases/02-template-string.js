const nombre = "Javier";
const apellido = "Ramirez";


//const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `${nombre} ${apellido}
esto es un segundo renglon
${ 1+1 }
`;

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola '+nombre;
};

console.log(`Este es un texto: ${getSaludo(nombre)}`);