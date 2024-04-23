

const persona = {
    nombre: 'Javi',
    apellido: 'Ramirez',
    edad: 26,
    direccion: {
        ciudad: 'CDMX',
        cp: 123,
        lat: 12.123,
        lng: 32.23452,
    },
};


//console.table( persona );
console.log( persona );

//console.log( {persona:persona} ); se crea un nuevo objeto, y se le asigna como valor el objeto anterior
//const persona2 = persona; Aqui se asigna la misma direccion de memoria
const persona2 = { ...persona };//Aqui copiamos los atributos de persona
persona2.nombre = 'Peter';

console.table(persona); // Muestra los valores en forma de tabla
console.log(persona2);
console.log(persona);