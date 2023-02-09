/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código.
let actualizaNumeroPalabras 

const entradaDoTexto = document.querySelector("textarea")
const saidaNumeroCaracteres = document.getElementById("numeroCaracteres")
const saidaNumeroPalabras = document.getElementById("numeroPalabras")

function actualizaNumeroCaracteres() {
    let stringCaracteres = entradaDoTexto.value
    let lonxitudeCaracteres = stringCaracteres.length
    saidaNumeroCaracteres.innertext = lonxitudeCaracteres
}

entradaDoTexto.addEventListener("input",actualizaNumeroCaracteres)
/**
 * Non cambies nada despois destas liñas
 */
export {
    entradaDoTexto,
    saidaNumeroCaracteres,
    saidaNumeroPalabras,
    actualizaNumeroCaracteres,
    actualizaNumeroPalabras
}