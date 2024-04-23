//Desestructuración o asignación desestructurante
const persona = {
    nombre: 'Javier',
    edad: 26,
    clave: '1234',
};

//const {nombre,edad,clave,} = persona;//Extrae los campos de persona que se especifiquen y los asigna a una variable de mismo nombre
// console.log(nombre);
// console.log(edad);
// console.log(clave);

//const {nombre:nombre2,edad:edad2,clave:clave2} = persona; Sirve para renombrar las variables que se extraen
//console.log(nombre2);

const usaContexto = ({clave, nombre, edad, rango='Jefe'}) =>{ //En caso de que el objeto de entrada no tenga rango, se le asignara
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1221,
            lng: -12.3421,
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = usaContexto(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
