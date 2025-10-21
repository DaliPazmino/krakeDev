esProductoValido = function (nombre) {
    if (nombre === "") {
        mostrarTexto("lblErrorProducto", "CAMPO OBLIGATORIO");
        return false;
    } else if (nombre.length > 10) {
        mostrarTexto("lblErrorProducto", "Tienas mas de 10 caracteres");
        return false;
    }else 
        mostrarTexto("lblErrorProducto", ""); // limpia el error si está bien
        return true;
}

esCantidadValida = function (cantidad){
       if (isNaN(cantidad)) {
        mostrarTexto("lblErrorCantidad", "*CAMPO OBLIGATORIO");
        return false;
    } else if (!Number.isInteger(cantidad)) {
        mostrarTexto("lblErrorCantidad", "Debe ser un número entero");
        return false;
    } else if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblErrorCantidad", "Rango valido: 0 a 100");
        return false;
    } else {
        mostrarTexto("lblErrorCantidad", "");
        return true;
    }
}


esPrecioValido = function (precio) {
    // precio viene de recuperarFloat; si no es número => NaN
    if (isNaN(precio)) {
        mostrarTexto("lblErrorPrecio", "*CAMPO OBLIGATORIO");
        return false;
    } else if (precio < 0 || precio > 50) {
        mostrarTexto("lblErrorPrecio", "Rango valido: 0 a 50");
        return false;
    } else {
        mostrarTexto("lblErrorPrecio", "");
        return true;
    }
}

calcularValorTotal = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto  = recuperarFloat("txtPrecio");
    let cantidad        = recuperarInt("txtCantidad");

    // 1) Validaciones
    const okNombre   = esProductoValido(nombreProducto);
    const okCantidad = esCantidadValida(cantidad);
    const okPrecio   = esPrecioValido(precioProducto);

    // Si algo está mal, NO seguimos calculando
    if (!(okNombre && okCantidad && okPrecio)) {
        // Deja montos en 0 para que no queden valores viejos
        mostrarTexto("lblSubtotal",  "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA",  "0.0");
        mostrarTexto("lblTotal",     "0.0");
        return;
    }

    // 2) Cálculos (solo si todo es válido)
    let valorSubtotal  = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

    let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

    let baseImponible  = valorSubtotal - valorDescuento;
    let valorIVA       = calcularIva(baseImponible);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

    let valorTotal     = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(2));
}


limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");

    mostrarTexto("lblSubtotal",  "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA",  "0.0");
    mostrarTexto("lblTotal",     "0.0");

    // limpiar mensajes de error
    mostrarTexto("lblErrorProducto", "");
    mostrarTexto("lblErrorCantidad", "");
    mostrarTexto("lblErrorPrecio", "");
}
