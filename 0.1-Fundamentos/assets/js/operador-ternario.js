

const dia = 3;
const horaActual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log('Hoy es un dia de Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Hoy es un dia entre semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11 ;


// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, abrimos a las ${horaApertura}` ;
// }

mensaje = (horaApertura <= horaActual) ? 'Esta abierto' : `Esta cerrado abrimos a las ${horaApertura}`;



console.log({ mensaje });