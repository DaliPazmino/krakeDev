validarPlaca = function () {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores", "");
        let provincia = obtenerProvincia(placa);
        if (provincia !== null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "Provincia incorrecta");
        }
    } else {
        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
        mostrarTexto("lblProvincia", "");
    }
}
