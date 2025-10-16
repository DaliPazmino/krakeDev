calcularValorDescuento = function (monto, porcentaje){
  let valorDescuento = (monto*porcentaje)/100;
  return valorDescuento;
}

calcularIva = function (monto){
  let Iva = 0.12;
  calIva = monto * Iva;
  return calIva;
}


calcularSubtotal = function (precio, cantidad){
  let totalPagar = precio * cantidad;
  return totalPagar;

}

calcularTotal = function (subtotal, descuento, iva) {
   let valorTotal = subtotal - descuento + iva;
   return valorTotal;
}