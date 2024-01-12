
function saludar(nombre){
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1, 2];

    //Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del retorno');
};

const saludar2 = function ( nombre ){
    console.log('Hola ' + nombre)
}

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Juan', 40, true, 'Costa rica');
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
// saludar2('Juan');
// saludarFlecha('Melissa')



const sumar = (a, b) => {
    return a + b;
};

// simplificar una funcion de flecha
const sumar2 = (a, b) => a + b;




function getAleatorio() {
    return Math.random();
}

const getAleatorio2  = ( ) =>  Math.random()

console.log(getAleatorio2());
