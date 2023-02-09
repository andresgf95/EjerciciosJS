/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código."

const entradaDoTexto = document.querySelector("textarea")
const saidaDoResultado = document.getElementById("enMaiusculas")

function actualizaSaidaEnMaiusculas() {
    const TextoIntroducido = entradaDoTexto.value
    const textoEnMaiusculas = TextoIntroducido.toUpperCase()
    saidaDoResultado.innerText = textoEnMaiusculas
}
entradaDoTexto.addEventListener("input",actualizaSaidaEnMaiusculas)

/**
 * Non cambies nada despois destas liñas
 */
export { entradaDoTexto, saidaDoResultado, actualizaSaidaEnMaiusculas }