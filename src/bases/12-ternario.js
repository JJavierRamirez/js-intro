const activo = true;

// let mensaje = '';

// if(activo){
//     mensaje = 'Activo';
// }
// else{
//     mensaje = 'Inactivo'
// }
//El codigo anterior con operador ternario
//Si activo es igual a true entonces Activo, caso contrario Inactivo
//const mensaje =( activo === true ) ? 'Activo' : 'Inactivo';
//const mensaje =( activo ) ? 'Activo' : 'Inactivo'; 
//const mensaje =( activo ) ? 'Activo' : null; //se desactiva el else
const mensaje = activo && 'Activo';
//const mensaje = (activo===true)&& 'Activo'; es lo que hace la linea anterior, if sin else. Se le asigna la cadena a mensaje si activo es true

console.log(mensaje);

// Nullish coalescing si el valor de la izquierda es undefined o nulo, retorna el de la derecha, de lo contrario toma la izquierda
const nulo = null; 
const evaluacion = nulo ?? 'valor por defecto'; // Guardara valor por defecto
const evaluacionDer = evaluacion ?? 'falso'; // Guardara valor por defecto

console.log(evaluacionDer);
