
// let a = 3;

// if (a >= 5) {
//     console.log('A es mayor o igual a 5'); // se salta esta linea 
// } else{
//     console.log('A es menor a 5');
// }

// console.log('Final del programa');

const hoy = new Date();
let dia = hoy.getDay();

// if (dia === 0) {
//     console.log('Hoy es domingo');
// } else if (dia === 2){
//     console.log('Hoy es Martes');    
// }else {
//     if (dia === 1) {
//         console.log('Hoy es lunes');
//     }else{
//         console.log('Hoy no es Lunes ni Domingo');
//     }
// }

// console.log({ hoy });
// console.log({ dia });

const diasLetras = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miercoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sabado',
}

// Dia de la semana
console.log(diasLetras[dia]);