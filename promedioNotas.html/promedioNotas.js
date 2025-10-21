calcularPromedioNotas = function () {
    //recupera los valores de cada caja de texto como float y guarde cada variable
    let nota1;
    let nota2;
    let nota3;
    nota1 = recuperarFloat("txtNota");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");
    // invocar la funcion calcularProdio, pasandole como paramteros las 3 notas, guardar el retonro en una variable llamada promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);
    //muestr la pantalla el valor primedio, usar solo 2 decimelaes 

    if (promedio > 0 && promedio < 7) {
        mostrarTexto("lblResultado", "REPROBADO");
        mostrarImagen("imgSaludo", "reprobada.gif");
    } else if (promedio > 7) {
        mostrarTexto("lblResultado", "Buen Trabajo");
        mostrarImagen("imgSaludo", "buenTrabajo.gif");
    }
}