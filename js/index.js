/*let intentos = 5
const combinacionCorrecta = [7, 7, 3, 3];


function hacerPreguntas() {
    let respuestas = [];

    // Primera pregunta
    let respuesta1 = prompt("¿Cuántos libros hay de Harry Potter?");
    respuestas.push(parseInt(respuesta1));

    // Segunda pregunta
    let respuesta2 = prompt("¿Cuántos continentes hay en el mundo?");
    respuestas.push(parseInt(respuesta2));

    // Tercera pregunta
    let respuesta3 = prompt("¿Cuántos colores tiene un semáforo?");
    respuestas.push(parseInt(respuesta3));

    // Cuarta pregunta
    let respuesta4 = prompt("¿Cuántos lados tiene un triángulo?");
    respuestas.push(parseInt(respuesta4));

        return respuestas;
}

function obtenerCombinacionCorrecta() {
    return [7, 7, 3, 3];  
}

function comprobarCombinacion(combinacionSecreta, intento) {
    for (let i = 0; i < 4; i++) {
        if (combinacionSecreta[i] !== intento[i]) {
            return false; 
        }
    }
    return true; }

function desafioCajaFuerte() {
    const combinacionCorrecta = obtenerCombinacionCorrecta(); 
    let adivinado = false;
    let intentos = 5; 

    console.log("Responde las preguntas correctamente para abrir la caja fuerte.");

    while (intentos > 0 && !adivinado) {
        let respuestasJugador = hacerPreguntas(); 
        adivinado = comprobarCombinacion(combinacionCorrecta, respuestasJugador);
        intentos--;

        if (!adivinado) {
            console.log("Combinación incorrecta. Te quedan " + intentos + " intentos.");
        }
    }

    if (adivinado) {
        console.log("¡Felicidades! Has abierto la caja fuerte.");
    } else {
        console.log("Lo siento, no has logrado abrir la caja fuerte. La combinación era: " + combinacionCorrecta.join(" "));
    }
}

desafioCajaFuerte();*/

let intentos = 5;
let combinacionCorrecta = [7, 7, 3, 3];

// Función para hacer las preguntas del candado (Desafío 2)
function hacerPreguntas() {
    let respuestas = [];

    // Primera pregunta
    let respuesta1 = prompt("¿Cuántos libros hay de Harry Potter?");
    respuestas.push(validarNumero(respuesta1));

    // Segunda pregunta
    let respuesta2 = prompt("¿Cuántos continentes hay en el mundo?");
    respuestas.push(validarNumero(respuesta2));

    // Tercera pregunta
    let respuesta3 = prompt("¿Cuántos colores tiene un semáforo?");
    respuestas.push(validarNumero(respuesta3));

    // Cuarta pregunta
    let respuesta4 = prompt("¿Cuántos lados tiene un triángulo?");
    respuestas.push(validarNumero(respuesta4));

    return respuestas;
}

function validarNumero(input) {
    let numero = parseInt(input);
    while (isNaN(numero)) {
        input = prompt("Entrada inválida. Por favor, ingresa un número:");
        numero = parseInt(input);
    }
    return numero;
}

function comprobarCombinacion(respuestasJugador) {
    return respuestasJugador.every((respuesta, index) => respuesta === combinacionCorrecta[index]);
}

// Desafío 1: Encontrar la primera mitad de la llave (la intención es poder hacer click en los arbustos y que se desplacen o momover algunos objetos para encontrar la llave)
function encontrarPrimeraMitad() {
    let respuesta = prompt("Buscas entre los arbustos... ¿En cuál de ellos encuentras la primera mitad de la llave? (Elige un número entre 1 y 5)");
    respuesta = validarNumero(respuesta);

    if (respuesta === 3) {
        console.log("¡Has encontrado la primera mitad de la llave!");
        return true;
    } else {
        console.log("No has encontrado nada. Sigue buscando.");
        return false;
    }
}

// Desafío 2: Abrir el candado del libro
function abrirCandadoLibro() {
    console.log("En la tapa del libro están las preguntas para obtener la combinación del candado.");
    let respuestasJugador = hacerPreguntas();
    if (comprobarCombinacion(respuestasJugador)) {
        console.log("¡Has abierto el candado y encontrado la segunda mitad de la llave!");
        return true;
    } else {
        console.log("La combinación es incorrecta. No puedes abrir el libro.");
        return false;
    }
}

// Desafío 3: Unir las dos mitades de la llave y abrir la puerta
function unirLlaveYAbrirPuerta() {
    console.log("Has encontrado las dos mitades de la llave.");
    let respuesta = prompt("¿Usas el pegamento junto a la puerta para unirlas? (Escribe 'si' o 'no')");
    
    if (respuesta.toLowerCase() === "si") {
        console.log("¡Has unido las dos mitades y abierto la puerta! Puedes entrar.");
        return true;
    } else {
        console.log("No has unido las mitades. No puedes abrir la puerta.");
        return false;
    }
}

function escenarioEntrada() {
    console.log("Bienvenido a La Entrada. Debes encontrar una manera de abrir la puerta.");

    // Desafío 1: Encontrar la primera mitad de la llave
    let primeraMitadEncontrada = false;
    while (!primeraMitadEncontrada) {
        primeraMitadEncontrada = encontrarPrimeraMitad();
    }

    // Desafío 2: Abrir el libro con candado para la segunda mitad
    let segundaMitadEncontrada = false;
    while (!segundaMitadEncontrada) {
        segundaMitadEncontrada = abrirCandadoLibro();
    }

    // Desafío 3: Unir las dos mitades de la llave
    let puertaAbierta = false;
    while (!puertaAbierta) {
        puertaAbierta = unirLlaveYAbrirPuerta();
    }

    console.log("¡Has completado el primer escenario y entrado en la mansión!");
}

escenarioEntrada();

