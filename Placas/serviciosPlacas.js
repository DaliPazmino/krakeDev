validarEstructura = function (placa) {
    let errores = "";

    // Verificar longitud
    if (placa.length < 7 || placa.length > 8) {
        errores = errores + "La placa debe tener entre 7 y 8 caracteres. ";
    }

    // Verificar las tres primeras letras
    if (!esMayuscula(placa.charAt(0))) {
        errores = errores + "El primer caracter debe ser una letra mayuscula. ";
    }
    if (!esMayuscula(placa.charAt(1))) {
        errores = errores + "El segundo caracter debe ser una letra mayuscula. ";
    }
    if (!esMayuscula(placa.charAt(2))) {
        errores = errores + "El tercer caracter debe ser una letra mayuscula. ";
    }
    if (!esGuion(placa.charAt(3))) {
        errores = errores + "El cuarto caracter debe ser un guion (-). ";
    }
    if (!esDigito(placa.charAt(4))) {
        errores = errores + "El quinto caracter debe ser un digito. ";
    }
    if (!esDigito(placa.charAt(5))) {
        errores = errores + "El sexto caracter debe ser un digito. ";
    }
    if (!esDigito(placa.charAt(6))) {
        errores = errores + "El septimo caracter debe ser un digito. ";
    }

    if (placa.length === 8 && !esDigito(placa.charAt(7))) {
        errores = errores + "El octavo caracter debe ser un digito. ";
    }

    if (errores === "") {
        return null; 
    } else {
        return errores; 
    }
}


obtenerProvincia = function (placa) {
    let letra = placa.charAt(0);  // obtener la primera letra
    let provincia = null;

    if (letra === "A") provincia = "Azuay";
    else if (letra === "B") provincia = "Bolívar";
    else if (letra === "C") provincia = "Carchi";
    else if (letra === "E") provincia = "Esmeraldas";
    else if (letra === "G") provincia = "Guayas";
    else if (letra === "H") provincia = "Chimborazo";
    else if (letra === "I") provincia = "Imbabura";
    else if (letra === "L") provincia = "Loja";
    else if (letra === "M") provincia = "Manabí";
    else if (letra === "N") provincia = "Napo";
    else if (letra === "O") provincia = "El Oro";
    else if (letra === "P") provincia = "Pichincha";
    else if (letra === "R") provincia = "Los Ríos";
    else if (letra === "S") provincia = "Pastaza";
    else if (letra === "T") provincia = "Tungurahua";
    else if (letra === "U") provincia = "Sucumbíos";
    else if (letra === "V") provincia = "Morona Santiago";
    else if (letra === "W") provincia = "Galápagos";
    else if (letra === "X") provincia = "Cotopaxi";
    else if (letra === "Y") provincia = "Santa Elena";
    else if (letra === "Z") provincia = "Zamora Chinchipe";

    return provincia;
}