document.addEventListener("DOMContentLoaded", () => {
    let intentos = 5;
    let combinacionCorrecta = [7, 7, 3, 3];
    let mitadLlaveArbustos = false;
    let mitadLlaveLibro = false;

    const resultadoArbustos = document.getElementById("resultado-arbustos");
    const arbustos = document.querySelectorAll(".arbusto");
    const abrirLibroBtn = document.getElementById("abrir-libro");
    const mensajeLibro = document.getElementById("mensaje-libro");
    const abrirPuertaBtn = document.getElementById("abrir-puerta");
    const mensajePuerta = document.getElementById("mensaje-puerta");

    const arbustoCorrecto = 3; // Número del arbusto correcto

    
    cargarProgreso();

    // interacción con los arbustos
    arbustos.forEach(arbusto => {
        arbusto.addEventListener("click", (event) => {
            const seleccionado = parseInt(event.target.getAttribute("data-arbusto"));
            if (seleccionado === arbustoCorrecto) {
                resultadoArbustos.textContent = "¡Has encontrado la primera mitad de la llave!";
                resultadoArbustos.classList.remove("resultado-oculto");
                resultadoArbustos.classList.add("resultado-correcto");
                mitadLlaveArbustos = true;
                guardarProgreso();
                verificarLlaveCompleta();
            } else {
                resultadoArbustos.textContent = "Este arbusto está vacío. Intenta con otro.";
                resultadoArbustos.classList.remove("resultado-oculto");
                resultadoArbustos.classList.remove("resultado-correcto");
            }
        });
    });

    // Evento para abrir el libro
    abrirLibroBtn.addEventListener("click", () => {
        if (mitadLlaveArbustos) {
            const preguntasLibro = document.getElementById("preguntas-libro");
            mensajeLibro.textContent = "Responde las preguntas para obtener la combinación.";
            preguntasLibro.classList.remove("resultado-oculto");

            const formPreguntas = document.getElementById("form-preguntas");
            formPreguntas.addEventListener("submit", (event) => {
                event.preventDefault();
                const respuestasJugador = [
                    parseInt(document.getElementById("pregunta1").value),
                    parseInt(document.getElementById("pregunta2").value),
                    parseInt(document.getElementById("pregunta3").value),
                    parseInt(document.getElementById("pregunta4").value),
                ];
                mitadLlaveLibro = comprobarCombinacion(respuestasJugador);

                if (mitadLlaveLibro) {
                    mensajeLibro.textContent = "¡Has abierto el candado y encontrado la segunda mitad de la llave!";
                    guardarProgreso();
                    verificarLlaveCompleta();
                } else {
                    mensajeLibro.textContent = "La combinación es incorrecta. Intenta nuevamente.";
                }
            });
        } else {
            alert("Primero necesitas encontrar la primera mitad de la llave.");
        }
    });

   // Evento para abrir la puerta
abrirPuertaBtn.addEventListener("click", () => {
    const opcionesPegamento = document.getElementById("opciones-pegamento");
    const usarPegamentoBtn = document.getElementById("usar-pegamento");
    const cancelarPegamentoBtn = document.getElementById("cancelar-pegamento");

    // Mostrar las opciones de pegamento
    opcionesPegamento.classList.remove("resultado-oculto");

    // Acción para usar pegamento
    usarPegamentoBtn.addEventListener("click", () => {
        mensajePuerta.textContent = "¡Has unido las dos mitades y abierto la puerta! Puedes entrar.";
        mensajePuerta.classList.remove("resultado-oculto");
        abrirPuertaBtn.disabled = true;
        opcionesPegamento.classList.add("resultado-oculto");
        guardarProgreso();
    });

    // Acción para cancelar
    cancelarPegamentoBtn.addEventListener("click", () => {
        mensajePuerta.textContent = "No has unido las mitades. No puedes abrir la puerta.";
        mensajePuerta.classList.remove("resultado-oculto");
        opcionesPegamento.classList.add("resultado-oculto");
    });
});

    // Función para verificar combinación
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
        localStorage.setItem("progresoEscapeRoom", JSON.stringify(progreso));
    }

    function cargarProgreso() {
        const progresoGuardado = localStorage.getItem("progresoEscapeRoom");
        if (progresoGuardado) {
            const progreso = JSON.parse(progresoGuardado);
            mitadLlaveArbustos = progreso.primeraMitadEncontrada;
            mitadLlaveLibro = progreso.segundaMitadEncontrada;
        }
    }
});


