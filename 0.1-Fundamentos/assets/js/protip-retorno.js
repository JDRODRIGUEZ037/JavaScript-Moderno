
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}



const persona = crearPersona('Juan', 'Rodriguez');
console.log(persona);

// simplificar


function crearAnimal(animal, raza) {
    return {
        animal, 
        raza
    }
}

const animales = crearAnimal('Perro', 'Buldog');
console.log(animales);


//Flecha

const crearInanimado = (objeto) => ({objeto});

const objetos = crearInanimado('Puerta');
console.log(objetos);