let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
        let seccionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
        seccionSeleccionarAtaque.style.display = "none"
    
        let seleccionarReiniciar  =document.getElementById ("Reiniciar")
    seleccionarReiniciar.style.display = "none"

    let BotonPersonaje = document.getElementById('boton_personaje')
    BotonPersonaje.addEventListener('click', seleccionarPersonaje)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener ("click", ReiniciarJuego)
}

function seleccionarPersonajeJugador() {
 let inputMilita = document.getElementById ("Milita")
 let inputCrisito = document.getElementById ("Crisito")
 let inputEmijandro = document.getElementById ("Emijandro")

if (inputMilita.checked) {
  alert ("seleccionaste a Milita")
} else if (inputCrisito.checked) {
  alert ("seleccionaste a Crisito")
} else if (inputEmijandro.checked) { 
  alert ("seleccionaste a Emijandro")
  } else {
    alert ("necesitas seleccionar a tu personaje")
  }
      seleccionarPersonajeEnemigo ()
} 

function seleccionarPersonajeEnemigo () {
let ataqueAleatorio = aleatorio (1,3)
let spanPersonajeEnemigo = document.getElementById ("personaje-Enemigo")

if (ataqueAleatorio == 1) {
 spanPersonajeEnemigo.innerHTML = "Milita"
} else if (ataqueAleatorio == 2) {
  spanPersonajeEnemigo.innerHTML = "Crisito"
} else {
  spanPersonajeEnemigo.innerHTML = "Emijandro"
}


function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ', el personaje del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let seccionReiniciar = document.getElementById ("reiniciar")
    seccionReiniciar.style.display = "block"
 
}

function ReiniciarJuego () {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

window.addEventListener('load', iniciarJuego) 

}