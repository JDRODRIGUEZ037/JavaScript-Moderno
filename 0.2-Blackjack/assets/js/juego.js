    // AC = Treboles
    // AD = Diamantes
    // AH = Corazones
    // AS = Espadas



let deck = [];
let tipos = [ 'C', 'D', 'H', 'S' ];
let especiales = [ 'A', 'J', 'Q', 'K' ];
let puntosJugador = 0,
    puntosComputadora = 0;


// Referencias en HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas')
const puntosHTML = document.querySelectorAll('small');

// Esta funcion crea un nuevo deck
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push( i + tipo)
        }
    }
    for (let tipo of tipos) {
        for (const especial of especiales) {
            deck.push( especial + tipo)
        }
    }

    deck = _.shuffle( deck );

    // console.log( deck );
    return deck
}
crearDeck();



// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    let carta = '2C';

    if ( deck.length === 0 ) {
        throw 'No hay cartas en la baraja'
    }
    
    carta = deck.pop();
    console.log( deck );

    return carta
}



// Volor carta

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    
    return (isNaN(valor)) ? ( valor === 'A') ? 11 : 10 : valor * 1;
}

let valor = valorCarta( pedirCarta() ); 


// Eventos

btnPedir.addEventListener('click', () =>  {
    
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta);
    puntosHTML[0].innerHTML = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`
    divCartasJugador.append( imgCarta );
    imgCarta.classList.add('carta')

    if (puntosJugador > 21) {
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
    }else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        btnPedir.disabled = true;
    }
    
});


