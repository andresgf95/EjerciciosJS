/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código."
const entradaDoTexto = document.querySelector("textarea")
const saidaDoResultado = document.querySelector("enMaiusculas")
function actualizaSaidaEnMaiusculas() {
    entradaDoTexto = entradaDoTexto.value
    saidaDoResultado = entradaDoTexto.toUpperCase()
    saidaDoResultado.innerText =  saidaDoResultado
}
actualizaSaidaEnMaiusculas = entradaDoTexto.addEventListener
/**
 * Non cambies nada despois destas liñas
 */
export { entradaDoTexto, saidaDoResultado, actualizaSaidaEnMaiusculas }