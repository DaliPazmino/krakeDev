let notas = [];

agregarElementos = function (){
    notas.push(5);
     notas.push(5);
    console.log(notas.length);
}

probarAgregar = function (){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota")
    agregarNota(notaRecuperada);
}

recorrerArreglo = function (){
    let notaR;
    for (let indice = 0; indice < notas.length ; indice ++){
        notaR = notas [indice];
        console.log(notaR);
    }
}


agregarNota = function (nota) {
    notas.push(nota);
}
//------reto---------
calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio = 0;

    // Sumar todas las notas
    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + notas[i];
    }

    // Evitar división por cero
    if (notas.length > 0) {
        promedio = sumaNotas / notas.length;
    }

    return promedio;
};

//  Función para mostrar el promedio en pantalla
ejecutarPromedio = function () {
    let resultado = calcularPromedio();
    mostrarTexto("lblPromedio", "Promedio: " + resultado.toFixed(2));
};