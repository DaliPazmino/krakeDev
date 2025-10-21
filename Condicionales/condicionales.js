function calcularTasaIntereses(ingresoAnual) {
    let tasa;

    if (ingresoAnual < 300000) {
        tasa = 0.16; // 16%
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasa = 0.15; // 15%
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasa = 0.14; // 14%
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasa = 0.13; // 13%
    } else {
        tasa = 0.12; // 12%
    }
    return tasa;
}

function calcularCapacidadPago(edad, ingresos, egresos) {
    let capacidad;
    let sobrante = ingresos - egresos; // lo que le sobra al mes

    if (edad > 50) {
        capacidad = sobrante * 0.30; // 30% si es mayor a 50
    } else {
        capacidad = sobrante * 0.40; // 40% si tiene hasta 50 años
    }

    return capacidad;
}

calcularDescuento = function (precio, cantidad) {
    let descuento = 0;
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03;
    } else if (cantidad >= 12) {
    } descuento = 0.04;

    let total = cantidad * precio;
    let valorPagar = total - (total * descuento);
    return valorPagar;
}

determinarColesteroLDL = function (nivelColesterol) {
    let resultado;

    if (nivelColesterol < 100) {
        resultado = "optimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        resultado = "Casi optimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        resultado = "Limite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        resultado = "Alto";
    } else {
        resultado = "Muy alto";
    }

    return resultado;
}

validarClave = function (clave) {
    let longitud = clave.length;
    if (longitud >= 8 && longitud <= 16) {
        return true;
    } else {
        return false;
    }

}


esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }

}
esMinuscula = function (caracter) {
    let codigoMi = caracter.charCodeAt(0);
    if (codigoMi >= 97 && codigoMi <= 122) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    let digito = caracter.charCodeAt(0);
    if (digito >= 48 && digito <= 57) {
        return true;
    } else {
        return false;
    }
}

darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 && notaGeometria > 90) {
        return true;
    } else {
        return false;
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}


dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true;
    }
    else {
        return false;
    }
}
mostrarFunciones = function () {
    console.log("=== calcularDescuento ===");
    console.log(calcularDescuento(100, 2));   // 200
    console.log(calcularDescuento(100, 4));   // 392 (2% descuento)
    console.log(calcularDescuento(100, 10));  // 970 (3% descuento)
    console.log(calcularDescuento(100, 15));  // 1440 (4% descuento)

    console.log("=== validarClave ===");
    console.log(validarClave("abc123"));
    console.log(validarClave("miClaveSegura"));
    console.log(validarClave("claveSuperLargaQueNoSirve"));

    console.log("=== calcularTasaIntereses ===");
    console.log(calcularTasaIntereses(200000));
    console.log(calcularTasaIntereses(800000));
    console.log(calcularTasaIntereses(3000000));

    console.log("=== calcularCapacidadPago ===");
    console.log(calcularCapacidadPago(30, 2000, 1000));
    console.log(calcularCapacidadPago(60, 2000, 1000));

    console.log("=== determinarColesteroLDL ===");
    console.log(determinarColesteroLDL(90));
    console.log(determinarColesteroLDL(150));
    console.log(determinarColesteroLDL(200));

    console.log("=== esMayuscula / esMinuscula / esDigito ===");
    console.log(esMayuscula("A"));
    console.log(esMinuscula("a"));
    console.log(esDigito("5"));

    console.log("=== darPermiso ===");
    console.log(darPermiso(95, 70, 85));
    console.log(darPermiso(80, 95, 85));

    console.log("=== otorgarPermiso ===");
    console.log(darPermiso(91, 70, 82));
    

    console.log("=== dejarSalir ===");
    console.log(dejarSalir(80, 95, 85));
    console.log(dejarSalir(95, 90, 85));
}