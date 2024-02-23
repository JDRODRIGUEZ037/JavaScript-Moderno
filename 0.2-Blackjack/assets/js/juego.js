
// Funcion anonima auto invocada
const miModulo = (( ) => {
    'use strict'

    let     deck        = [];
    const   tipos       = [ 'C', 'D', 'H', 'S' ],
            especiales  = [ 'A', 'J', 'Q', 'K' ];

    let puntosJugadores = [];

    // Referencias en HTML ---------------------
    const   btnPedir   = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo   = document.querySelector('#btnNuevo');

    const   divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML         = document.querySelectorAll('small');


    // esta funcion inicia el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for ( let i = 0; i < numJugadores; i++ ) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0);
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnDetener.disabled = false;
        btnPedir.disabled   = false;

    };
        

    // Esta funcion crea un nuevo deck -------------------
    const crearDeck = () => {

        deck = [];
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
        return deck = _.shuffle( deck );
    };
    
    
    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.length === 0 ) {
            throw 'No hay cartas en la baraja'
        }
        return deck.pop();
    }

    // Volor carta

    function valorCarta(carta) {

        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
    }

    // turno: 0 = primer jugador y el ultimo serala computadora
    const acumularPuntos = ( carta, turno ) =>{

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // Crea lacarta en el html
    const crearCarta = ( carta, turno) => {
        const imgCarta  = document.createElement('img');
        imgCarta.src    = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');   
        divCartasJugadores[turno].append( imgCarta );
    }

    // quien gana
    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

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
    }

    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 )

            crearCarta( carta, puntosJugadores.length - 1)

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )
    
        determinarGanador();
    };


    // Eventos -----------------------------------------------

    btnPedir.addEventListener('click', () =>  {
        
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 )

        crearCarta( carta, 0 );

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

        turnoComputadora( puntosJugadores[0] );
        }
    );

    btnNuevo.addEventListener('click', () => {

        // console.clear();

        inicializarJuego();

        }
    );

    return {
        nuevoJuego: inicializarJuego
    };

}) ();