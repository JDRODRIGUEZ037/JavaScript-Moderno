
let a  = 10;
let b = a;
a = 30;

// console.log({ a, b });

// --------------------------------

let juan = { nombre: 'Juan' };
let ana = { ...juan };  //operador espret... separa los elementos
ana.nombre = 'Ana';

// console.log({ juan, ana });


// --------------------------------

const cambiaNombre = ({ ...persona }) => {  //ahora ...es un espret ya que lo pase como objeto{}
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

// console.log({ peter, tony });


// Arreglos

const frutas = [ 'Manzana', 'Pera', 'Piña' ];

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');


otrasFrutas.push( 'Mango' );

console.table({ frutas, otrasFrutas });