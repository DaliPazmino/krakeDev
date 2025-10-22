validarPlaca = function () {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        mostrarTexto("lblResultado", "ESTRUCTURA VALIDA");
        mostrarTexto("lblErrores", "");

        //provincia 
        let provincia = obtenerProvincia(placa);
        if (provincia !== null) {
            mostrarTexto("lblProvincia", provincia);
        } else {
            mostrarTexto("lblProvincia", "Provincia incorrecta");
        }

        //tipo de vihiculo
        let tipo = obtenerTipoVehiculo(placa);
        if (tipo !== null)
            mostrarTexto("lblTipo", tipo);
        else
            mostrarTexto("lblTipo", "Tipo de vehículo incorrecto");

        // Día de pico y placa
        let dia = obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblDia",  dia)

    } else {
        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipo", "");
        mostrarTexto("lblDia", "");

    }
}

limpiar = function () {
    // limpiar caja de texto
    document.getElementById("txtPlaca").value = "";

    // limpiar todos los labels
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblErrores", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipo", "");
    mostrarTexto("lblDia", "");

    // volver el foco al campo de texto
    document.getElementById("txtPlaca").focus();
}
