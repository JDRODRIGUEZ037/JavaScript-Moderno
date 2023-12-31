
// function crearPersona(nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona('Juan', 'Rodriguez');
const { apellido: nuevoApellido } = crearPersona('Juan', 'Ramos');


// simplificar

function crearAnimal(animal, raza) {
    return {
        animal,
        raza
    }
}

const animales = crearAnimal('Perro', 'Buldog');


//Flecha

const crearInanimado = (objeto) => ({objeto});

const objetos = crearInanimado('Puerta');



// imprimir los argumentos de la funcion
function imprimirArgumentos() {
    console.log( arguments );
};

// imprimir argumentos en la funcion de =>
const imprimirArgumentos2 = ( edad, ...args ) => { //despues del parametro rest... no puede ir nada
    // console.log( edad, args );
    return args;
}

const argumentos = imprimirArgumentos2(10, 'Juan', true, false, 'Rodriguez');
const [ edad, nombre, vivo, casado, apellido ] = imprimirArgumentos2(10, 'Juan', true, false, 'Jimenez');



// destructuracion de argumentos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40, 
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( personaje.nombre );
//     console.log( personaje.codeName );
//     console.log( personaje.vivo );
//     console.log( personaje.edad );
//     console.log( personaje.trajes );

// }

const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes} ) => {
    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

imprimePropiedades( tony );


// console.log(persona);
// console.log(animales);
// console.log(objetos);
// imprimirArgumentos(10, 'Juan', true, false, 'Rodriguez');
// console.log({ argumentos });
// console.log({ edad, nombre, vivo, casado, apellido });
// console.log({ nuevoApellido });
