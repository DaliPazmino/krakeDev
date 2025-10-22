
validarPassword = function (password) {
    let errores = "";

    if (password.length < 8) {
        errores = errores + "- Debe tener al menos 8 caracteres.\n";
    }
    if (password.length > 16) {
        errores = errores + "- No debe tener más de 16 caracteres.\n";
    }

    let tieneMayus = false;
    let tieneNumero = false;
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);

        if (c >= "A" && c <= "Z") {
            tieneMayus = true;
        }
        if (c >= "0" && c <= "9") {
            tieneNumero = true;
        }
        if (c == "*" || c == "-" || c == "_") {
            tieneEspecial = true;
        }
    }

    if (!tieneMayus) {
        errores = errores + "- Debe tener al menos una letra mayúscula.\n";
    }
    if (!tieneNumero) {
        errores = errores + "- Debe tener al menos un número.\n";
    }
    if (!tieneEspecial) {
        errores = errores + "- Debe tener al menos un carácter especial (*, - o _).\n";
    }

    return errores;
}


ejecutarValidacion = function () {
    let password;
    let errores;

    password = recuperarTexto("txtPassword");
    errores = validarPassword(password);

    if (errores == "") {
        cambiarTexto("lblResultado", " Password correcto");
        cambiarTexto("lblErrores", "");
    } else {
        cambiarTexto("lblResultado", "Password incorrecto");
        cambiarTexto("lblErrores", errores);
    }
}
