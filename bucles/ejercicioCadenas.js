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
// se [uede concluir cuando ya haya barrido todo el arreglo]
buscarLetra = function (cadena, letra) {
    let letraIterada;
    let existeLetra = false;
    for (let i = 0; cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeLetra = true;
        }

    } if (existeLetra == true) {
        return true;
        //console.log("existe");
    } else {
        return false;
        //console.log("no existe");
    }

}


contarMayusculas = function (cadena) {
    let letra
    let contadorMayusculas =0;
    for (let i=0; i<cadena.length; i++){
        letra = cadena.charAt (i);
        if (esMayuscula(letra)){
            contadorMayusculas = contadorMayusculas +1;
        }
    }
  
    console.log (contadorMayusculas);
}