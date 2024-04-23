console.log("hola mundo");

// Variables y constantes
const nombre = "javier";
const apellido = "Ramirez";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//var ya bi se debe usar 
if(true){
    const nombre = "peter";
    console.log(nombre);
}

console.log(nombre);
// DIFERENCIAS ENTRE VAR Y LET -> Let y const crean variables de scope, mientras var lo hace de manera global

// var nombre = 'Javi';
// if(true){
//     var nombre = 'Javier';
//     console.log(nombre) Output: Javier
// }
// console.log(nombre) output: Javier

// let nombre = 'Javi';
// if(true){
//     let nombre = 'Javier';
//     console.log(nombre); out: Javier
// }
// console.log(nombre); out: Javi 

// let nombre = 'Javi';
// if(true){
//     nombre = 'Javier';
// }
// console.log(nombre); out: Javier 