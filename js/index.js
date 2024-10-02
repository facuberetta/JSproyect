let intentos = 5
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

desafioCajaFuerte();
