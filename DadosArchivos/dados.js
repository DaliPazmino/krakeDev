jugar = function () {
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if (aleatorio > 3) {
        cambiarTexto("lblMensaje", ":   Mayor a 3 - > Ganaste")
        //console.log("es mayor a 3");
        //console.log("ganaste");
    } else {
        cambiarTexto("lblMensaje", ":   Menor a 3 ->  Game Over")

        //console.log("es menor a 3");
        //console.log("gamea over");
    }
}


//Crear una funcion llamada lanzarDado
// nor recibe parametros
// retorna un numero aleatorio entre 1 y 6

lanzarDado = function () {
    let aleatorio;
    let numeroMultiplicado
    let numeroEntero;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 6;
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;
    return valorDado;
}