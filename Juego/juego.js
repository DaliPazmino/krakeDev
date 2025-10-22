
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
        //puntosUsuario = puntosUsuario + 1;
    } else {
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
        //puntosComputador = puntosComputador + 1;
    }
}



