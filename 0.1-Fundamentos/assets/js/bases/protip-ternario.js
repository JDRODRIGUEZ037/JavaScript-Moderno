


const elMayor = ( a, b ) => ( a > b) ? a : b;

const elMenor = ( a, b ) =>   a < b  ? a : b;

// console.log(  elMayor(10, 15)  );
// console.log(  elMenor(20, 12)  );



const tieneMembresia = ( miembro ) => miembro ? 'Vale 2 dolares' : 'Vale 10 dolares';

// console.log( tieneMembresia(false) );


let amigo = false;

const amigosArr = [
    'Peter',
    'Tony',
    'Hulk',
    amigo ? 'Thor' : 'Loki'
];

// console.log( {amigosArr} );

let nota = 69;

const grado  =  nota >= 90 ? 'A+' :
                nota >= 80 ? 'B+' :
                nota >= 70 ? 'C+' : 'F';


console.log({ nota, grado });