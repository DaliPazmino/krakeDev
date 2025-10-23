// Función que retorna un número aleatorio entre 1 y 100
generarNumeroAleatorio = function () {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>VALOR</th></tr>";
    let miNumero;

    for (let i = 0; i < arregloNumeros.length; i++) {
        miNumero = arregloNumeros[i]; 
        contenidoTabla += "<tr><td>" + miNumero + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


// Función principal que genera el arreglo
generarAleatorios = function () {
    let aleatorios = [];
    let numero = recuperarInt("txtNumero");

    if (isNaN(numero) || numero < 5 || numero > 20) {
        mostrarTexto("lblError", "Debe ingresar un número entre 5 y 20.");
        return;
    }

    mostrarTexto("lblError", "");

    for (let i = 0; i < numero; i++) {
        console.log("Índice:", i);
        let valor = generarNumeroAleatorio();
        aleatorios.push(valor);
    }

    // 5. Mostrar resultados al salir del for
    mostrarResultados(aleatorios);
}


