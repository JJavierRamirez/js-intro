//import heroes, {owners} from '../data/heroes'; // Importaciones por defecto no llevan llaves
import heroes from '../data/heroes';
//console.log(owners);
// const getHeroeById = (id)=>{
//     return heroes.find( (heroe) => heroe.id === id);
// };
//Funcion find, para encontrar un elemento con el parametro dado
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
//console.log(getHeroeById(1));

//Uso de funcion filter, para crear un nuevo arreglo con los parametros de filtrado
export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));
