mostratTextoEnCaja = function (idComponente, mensaje){
    let cmpResultado;
    cmpResultado = document.getElementById(idComponente);
    cmpResultado.value = mensaje;
}
recuperarTexto = function (idComponente){
     let componente;
     let valorIngresado;
     componente = document.getElementById (idComponente);
     valorIngresado = componente.value;
     return valorIngresado;
    }
recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto (idComponente);
    let valorEntero = parseInt (valorCaja);
    return valorEntero ;
}
recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto (idComponente);
    let valorFloat = parseFloat (valorCaja);
    return valorFloat;
}
mostrarTexto = function (idComponente, mensaje){
    let cmpResultado;
    cmpResultado = document.getElementById(idComponente);
    cmpResultado.innerText = mensaje;
}
mostrarImagen = function (idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}