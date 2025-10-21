calcularValorDescuento = function (monto, porcentaje){
  let valorDescuento = (monto*porcentaje)/100;
  return valorDescuento;
}

calcularIva = function (monto){
  let Iva = 0.12;
  valorIva = monto * Iva;
  return valorIva;
}


calcularSubtotal = function (precio, cantidad){
  let totalPagar = precio * cantidad;
  return totalPagar;

}

calcularTotal = function (subtotal, descuento, iva) {
   let valorTotal = subtotal- descuento +iva;
   return valorTotal;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  let descuento = 0;

    // Validar que los valores sean correctos
    if (subtotal <= 0 || cantidad <= 0) {
        return 0;
    }

    // Aplicar el porcentaje de descuento según la cantidad
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03; // 3%
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04; // 4%
    } else { // 12 o más
        descuento = subtotal * 0.05; // 5%
    }

    return descuento;
}

