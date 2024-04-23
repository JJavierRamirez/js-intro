const personajes = ['Kyle','Stan','Cartman'];

//Obtiene al primer elemento del arreglo
//const [p1] = personajes;
//Obtiene al tercer elemento del arreglo, la coma es para ignorar los primeros elementos
const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

//Desestructurando el return
const [letras,numeros] = retornaArreglo();
console.log(letras, numeros);

// const UseState = (valor) =>{
//     return[valor,()=>{console.log('hola, mundo!')}]
// }

// const arr = UseState('Javier');
// console.log(arr);
// Llamamos a la funcion dentro del arreglo
// arr[1]();

//Tarea 
//1.- LLamar al primer valor del arreglo nombre
//2.- Llamar al segundo valor setNombre
//Solución:
const UseState = (nombre) =>{
    return[nombre, () =>{console.log('hola, mundo!')}]
}

const [nombre,setNombre] = UseState('Javier');

console.log(nombre);
setNombre();
