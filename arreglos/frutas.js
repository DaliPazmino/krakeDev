let fruta =["pera", "manzan","banana"];
probarBusqueda = function(){
    let frutaIngresada = recuperarTexto ("lblFruta");
    let resultado = buscar (frutaIngresada);
    if(resultado == null){
        alert("No existe la fruta");
    }else{
        alert(frutaIngresada+ "ha sido encontrada");
    }
}
 buscar = function (frutas){
    let elemento;
    let frutaEncontrada = null;
    for (let i = 0;i< frutas.length; i++){
          elemento = frutas[i];
          if (fruta == elemento){
            frutaEncontrada = elemento;
            break;
          }
    }
    return frutaEncontrada;
 }