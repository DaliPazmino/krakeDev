
recuperarTexto = function (idComponente) {
    let Componente;
    let valorIngresado;
    Componente = document.getElementById(idComponente);
    valorIngresado = Componente.value;
    return valorIngresado;
}
recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat
        ;
}

mostrarTexto = function (idComponente, mensaje) {
    let Componente;
    Componente = document.getElementById(idComponente);
    Componente.innerText = mensaje;
}

mostrarImagen = function (idComponente, rutaImagen) {
    let Componente;
    Componente = document.getElementById(idComponente);
    Componente.src = rutaImagen;
}

mostrarTextoEnCaja = function(idComponente, mensaje){

let Componente;
    Componente = document.getElementById(idComponente);
    Componente.value = mensaje;
}