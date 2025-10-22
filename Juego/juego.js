let puntosUsuario = 0;
let puntosComputador = 0;


jugar = function (seleccionado) {
    // La compu elige
    let eleccionComputador = generarElemento();

    // Mostrar imagen elegida por la compu (utilitario)
    let ruta = generarRuta(eleccionComputador);
    cambiarImagen("imgComputador", ruta);

    // Determinar ganador
    let resultado = determinarGanador(seleccionado, eleccionComputador);

    if (resultado === 0) {
        mostrarTexto("lblResultado", "EMPATE");
    } else if (resultado === 1) {
        mostrarTexto("lblResultado", "¡GANASTE LA PARTIDA!");
        puntosUsuario = puntosUsuario + 1;
    } else {
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
        puntosComputador = puntosComputador + 1;
    }

    //Mostrar puntajes actualizados
    mostrarTexto("lblPuntosUsuario", puntosUsuario.toString());
    mostrarTexto("lblPuntosComputador", puntosComputador.toString());

    if (puntosUsuario === 5) {
        mostrarTexto("lblResultado", "¡HAS GANADO EL JUEGO!");
        deshabilitarBotones();
    } else if (puntosComputador === 5) {
        mostrarTexto("lblResultado", "EL COMPUTADOR TE HA VENCIDO");
        deshabilitarBotones();
    }

    nuevaPartida = function () {
        puntosUsuario = 0;
        puntosComputador = 0;
        mostrarTexto("lblPuntosUsuario", "0");
        mostrarTexto("lblPuntosComputador", "0");
        mostrarTexto("lblResultado", "");
        cambiarImagen("imgComputador", "");
        habilitarBotones();
    }

}



