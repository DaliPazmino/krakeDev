ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena")
    recorrerCadena(mensaje);
}
ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let invertida = invertirCadena(mensaje);
    cambiarTexto("lblResultado", "Cadena invertida: " + invertida);
}


recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("caracter     " + caracter + "    posicion  " + posicion);
    }

    /*for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("caracter2 " + caracter + "posicion" + posicion);
    }*/
}


invertirCadena = function (cadena) {
    let resultado = ""; 

    for (let i = cadena.length - 1; i >= 0; i--) {
        let letra = cadena.charAt(i);
        resultado = resultado + letra; 
    }

    return resultado;
}