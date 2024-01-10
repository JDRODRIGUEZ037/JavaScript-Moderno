


const regresaTrue = () => {
    return true;
}

// const regresaFalse = () => {
//     console.log('Regresa False');
//     return false;
// }


// console.warn('Not o  la negacion');
// console.log(true); //true
// console.log(!true);  //false
// console.log(!false);  //true

// console.log( !regresaFalse() ); //true


// console.warn('And');
// console.log( true && true ); //true
// console.log( true &&  false ); //false
// console.log( true &&  !false ); //true


// console.log('========');
// console.log( regresaFalse() && regresaTrue()); //false
// console.log(regresaTrue() && regresaFalse()); //false



// console.warn('Or'); //true
// console.log( true || false ); //true
// console.log( false || false ); // false

// console.log( regresaTrue() || regresaFalse()); //false



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'ya no soy falso again' || true;
const a5 = soyFalse || regresaTrue() || soyNull || 'ya no soy falso again' || true;
console.log({ a1, a2, a3, a4, a5 });