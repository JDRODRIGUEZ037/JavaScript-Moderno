
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Juan', 'Rodriguez');


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



// console.log(persona);
// console.log(animales);
// console.log(objetos);
// imprimirArgumentos(10, 'Juan', true, false, 'Rodriguez');
console.log({ argumentos });