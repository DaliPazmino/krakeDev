let puntos;
puntos = 0;
let lanzamientos;
lanzamientos = 5;
jugar = function () {
    let resultado;
    resultado = lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

modificarPuntos = function (numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
    if (puntos >= 10) {
        cambiarTexto("lblMensaje", "Ganaste");

    }
    /// que gane si el jugador obtiene mas de 20 puntos 
    // mostrar emnsaje ganaste
}
//no recibe parametros 
// resta uno a la variable lanzamientos
// guarda resultados a la varibale
// muestra en pantalla
modificarLanzamientos = function () {
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);

    if (lanzamientos == 0) {
        cambiarTexto("lblMensaje", "Game Over");
        // limpiar después de 2 segundos
        setTimeout(limpiar, 2000);
    }
}



limpiar = function () {
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("lblMensaje", "");
    cambiarImagen ("imgDado", "");
    // coloar puntaje en 0 y lanzamineto en 5 
    // en las variables y en pantalla
}
// funion mostrar recibe el numero quequier mostrar
//muestra la imagen correspondiente al numero que recibe
// no retorna nada
mostrarCara = function (numero) {
    if (numero == 1) { //compara == y un= se asigna
        cambiarImagen("imgDado", "dados1.png");
    } else if (numero == 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if (numero == 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if (numero == 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if (numero == 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if (numero == 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}

lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}