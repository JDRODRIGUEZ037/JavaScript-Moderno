const personaje = {
    //key: value,
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40, 
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};
console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Edad:', personaje['edad']);

console.log('Coors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log('No.Trajes: ', personaje.trajes.length)
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length - 1])

const x = 'vivo';
console.log('vivo:', personaje[x]);

console.log('ultima pelicula', personaje['ultima-pelicula']);

// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = 123;

Object.freeze(personaje); //congela para que sea inmutable

personaje.dinero = 100000;
personaje.direccion.ubicacion = 'Costa rica'
console.log(personaje);



const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);





