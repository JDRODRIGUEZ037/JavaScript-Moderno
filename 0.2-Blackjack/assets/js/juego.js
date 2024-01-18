    // AC = Treboles
    // AD = Diamantes
    // AH = Corazones
    // AS = Espadas



let deck        = [];
let tipos       = [ 'C', 'D', 'H', 'S' ];
let especiales  = [ 'A', 'J', 'Q', 'K' ];
let puntosJugador       = 0,
    puntosComputadora   = 0;


// Referencias en HTML ---------------------
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')

const puntosHTML = document.querySelectorAll('small');

// Esta funcion crea un nuevo deck -------------------
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

    console.log( deck );
    return deck
};
crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    let carta = '2C';

    if ( deck.length === 0 ) {
        throw 'No hay cartas en la baraja'
    }
    
    carta = deck.pop();
    return carta
}

// Volor carta

function valorCarta(carta) {

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}

// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerHTML = puntosComputadora;

        const imgCarta  = document.createElement('img');
        imgCarta.src    = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
    
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos) {
            alert(' Nadie gana, es un empate');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora Gana');
        }else if ( puntosComputadora > 21) {
            alert('Genial, has ganado');
        }else {
            alert('Computadora Gana');
        }
    }, 300);
};


// Eventos -----------------------------------------------

btnPedir.addEventListener('click', () =>  {
    
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta);
    puntosHTML[0].innerHTML = puntosJugador;

    const imgCarta  = document.createElement('img');
    imgCarta.src    = `assets/cartas/${ carta }.png`;
    divCartasJugador.append( imgCarta );
    imgCarta.classList.add('carta')

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
        
    }else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador );
    }
);

btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();

    puntosJugador       = 0;
    puntosComputadora   = 0;

    puntosHTML[0].innerHTML = 0;
    puntosHTML[1].innerHTML = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

    }
);


