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

document.addEventListener("DOMContentLoaded", () => {
    let intentos = 5;
    let combinacionCorrecta = [7, 7, 3, 3];
    let mitadLlaveArbustos = false;
    let mitadLlaveLibro = false;

    const explorarArbustosBtn = document.getElementById("explorar-arbustos");
    const resultadoArbustos = document.getElementById("resultado-arbustos");
    
    const abrirLibroBtn = document.getElementById("abrir-libro");
    const mensajeLibro = document.getElementById("mensaje-libro");
    
    const abrirPuertaBtn = document.getElementById("abrir-puerta");
    const mensajePuerta = document.getElementById("mensaje-puerta");

    
    cargarProgreso();

    // Evento para explorar los arbustos
    explorarArbustosBtn.addEventListener("click", () => {
        mitadLlaveArbustos = encontrarPrimeraMitad();
        if (mitadLlaveArbustos) {
            resultadoArbustos.textContent = "¡Has encontrado la primera mitad de la llave!";
            resultadoArbustos.classList.remove("resultado-oculto");
            guardarProgreso();
            verificarLlaveCompleta();
        } else {
            resultadoArbustos.textContent = "No has encontrado nada. Sigue buscando.";
            resultadoArbustos.classList.remove("resultado-oculto");
        }
    });

    // Evento para abrir el libro
    abrirLibroBtn.addEventListener("click", () => {
        if (mitadLlaveArbustos) {
            mensajeLibro.textContent = "El libro contiene preguntas. ¡Resuélvelas para obtener la combinación del candado!";
            mensajeLibro.classList.remove("resultado-oculto");
            
            let respuestasJugador = hacerPreguntas();
            mitadLlaveLibro = comprobarCombinacion(respuestasJugador);
            
            if (mitadLlaveLibro) {
                mensajeLibro.textContent = "¡Has abierto el candado y encontrado la segunda mitad de la llave!";
                guardarProgreso();
                verificarLlaveCompleta();
            } else {
                mensajeLibro.textContent = "La combinación es incorrecta. No puedes abrir el libro.";
            }
        } else {
            alert("Primero necesitas encontrar la primera mitad de la llave.");
        }
    });

    // Evento para abrir la puerta
    abrirPuertaBtn.addEventListener("click", () => {
        let respuesta = confirm("¿Usas el pegamento junto a la puerta para unirlas?");
        if (respuesta) {
            mensajePuerta.textContent = "¡Has unido las dos mitades y abierto la puerta! Puedes entrar.";
            mensajePuerta.classList.remove("resultado-oculto");
            abrirPuertaBtn.disabled = true;
            guardarProgreso(); 
        } else {
            mensajePuerta.textContent = "No has unido las mitades. No puedes abrir la puerta.";
            mensajePuerta.classList.remove("resultado-oculto");
        }
    });

    // Funciones de desafíos
    function encontrarPrimeraMitad() {
        let respuesta = parseInt(prompt("Buscas entre los arbustos... ¿En cuál de ellos encuentras la primera mitad de la llave? (Elige un número entre 1 y 5)"));
        return respuesta === 3;
    }

    function hacerPreguntas() {
        let respuestas = [];
        respuestas.push(validarNumero(prompt("¿Cuántos libros hay de Harry Potter?")));
        respuestas.push(validarNumero(prompt("¿Cuántos continentes hay en el mundo?")));
        respuestas.push(validarNumero(prompt("¿Cuántos colores tiene un semáforo?")));
        respuestas.push(validarNumero(prompt("¿Cuántos lados tiene un triángulo?")));
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

    function verificarLlaveCompleta() {
        if (mitadLlaveArbustos && mitadLlaveLibro) {
            abrirPuertaBtn.disabled = false;
            mensajePuerta.textContent = "¡Has encontrado ambas mitades! Usa el pegamento junto a la puerta.";
        }
    }
    
    function guardarProgreso() {
        const progreso = {
            primeraMitadEncontrada: mitadLlaveArbustos,
            segundaMitadEncontrada: mitadLlaveLibro,
        };
        localStorage.setItem('progresoEscapeRoom', JSON.stringify(progreso));
    }
    
    function cargarProgreso() {
        const progresoGuardado = localStorage.getItem('progresoEscapeRoom');
        if (progresoGuardado) {
            const progreso = JSON.parse(progresoGuardado);
            mitadLlaveArbustos = progreso.primeraMitadEncontrada;
            mitadLlaveLibro = progreso.segundaMitadEncontrada;
        }
    }
});


