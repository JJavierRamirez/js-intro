//Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`
};

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Javier'));

console.log(saludar('javi'));
console.log(saludar2('javi'));
console.log(saludar3('javi'));
console.log(saludar4());

//Funcion flecha para retornar un objeto (para retornar un objeto de manera implicita usamos los parentesis)
const getUser = () => ({
    uid: '123',
    username: 'Javier',
})

const user = getUser();
console.log(user);

//Tarea : transformar a funcion flecha
// function getUsuarioActivo(nombre){
//     return{
//         uid: '1234566',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Tarea');
// console.log(usuarioActivo);

//solucion
const usuarioActivo = (nombre) => (
    {
        uid: '1234566',
        username: nombre
    }
);

console.log(usuarioActivo('Tarea'));
