import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         const heroe = getHeroeById(2);
//         // console.log('2 segundos despues');
//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe');
//     }, 2000)

// });

// promesa.then((heroe)=> {
//     console.log('heroe',heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id)=> {
    return new Promise((resolve, reject)=>{
    
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    
    });
}

getHeroeByIdAsync(4)
    //Esta linea es igual a la de abajo, el argumento que recibe se manda automaticamente a la funcion a utilizar
    //.then(heroe => console.log('Heroe',heroe))
    //.catch(err => console.warn(err));  
    .then(console.log)
    .catch(console.warn);