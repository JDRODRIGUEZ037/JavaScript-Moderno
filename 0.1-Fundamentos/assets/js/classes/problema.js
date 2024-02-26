

const juancho = {
    nombre: 'Juan',
    edad: 17,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 12
}


// juancho.imprimir();

//  Esto se debe crear con la palabra new
function Persona ( nombre, edad ) {

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }


}

const maria = new Persona( 'Maria', 18 );
const melissa = new Persona( 'Melissa', 20 );
// console.log( maria );
maria.imprimir(); 
melissa.imprimir();