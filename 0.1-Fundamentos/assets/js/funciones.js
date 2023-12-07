
function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
};

const saludar2 = function ( nombre ){
    console.log('Hola ' + nombre)
}

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}


saludar('Juan', 40, true, 'Costa rica');
saludar2('Juan');
saludarFlecha('Melissa')