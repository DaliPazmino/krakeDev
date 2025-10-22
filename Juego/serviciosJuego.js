obtenerAleatorio = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;

    aleatorio = Math.random();      
    numeroMultiplicado = aleatorio * 3; 
    numeroEntero = parseInt(numeroMultiplicado); 
    return numeroEntero + 1;
}
generarElemento = function () {
    let numero;
    let elemento;

    numero = obtenerAleatorio();

    if (numero === 1) {
        elemento = "piedra";
    } else if (numero === 2) {
        elemento = "papel";
    } else {
        elemento = "tijera";
    }

    return elemento;
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let resultado;

    if (eleccionJugador1 === eleccionJugador2) {
        resultado = 0; // empate
    } else if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra")
    ) {
        resultado = 1; // gana jugador 1
    } else {
        resultado = 2; // gana jugador 2
    }
    return resultado;
}

generarRuta = function (nombre) {
    let ruta;
    ruta = "./imagenes/" + nombre + ".png";
    return ruta;
}



probarFunciones = function () {
    console.log("=== PRUEBA DE FUNCIONES ===");

    // Probar obtenerAleatorio
    console.log("Numero aleatorio:", obtenerAleatorio());

    // Probar generarElemento
    console.log("Elemento generado:", generarElemento());

    // Probar determinarGanador
    console.log("Ganador (piedra vs tijera):", determinarGanador("piedra", "tijera"));
    console.log("Ganador (papel vs piedra):", determinarGanador("papel", "piedra"));
    console.log("Ganador (tijera vs tijera):", determinarGanador("tijera", "tijera"));

    // Probar generarRuta
    console.log("Ruta de piedra:", generarRuta("piedra"));

    console.log("=== FIN DE LAS PRUEBAS ===");
}
