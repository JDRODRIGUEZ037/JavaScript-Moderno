let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr ) => {
    console.log({ elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);

let = juegosBorrados = juegos.pop();
console.log({juegosBorrados, juegos});

let pos = 1;

let borrados = juegos.splice(pos, 2);
console.log({borrados, juegos});


let metroidInex = juegos.indexOf('Metroid'); //CaseSenSitive
console.log({metroidInex});


