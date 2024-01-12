
console.warn('While');

const carros = ['Ford', 'Mazda', 'Porshe', 'Ferari']

let i = 0;

// while ( i < carros.length ) {
//     console.log( carros[i] );
//     i++;
// }

while ( i < carros.length ) {
    if ( i === 1 ) {
        i++;
        continue
    }
    console.log( carros[i] );
    i++;
}


console.warn('Do While');

let j = 0;

do {
    console.log( carros[j] );
    j++;
} while ( j < carros.length );