//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;        // se incrementa en ingresarLetra()
let coincidencias = 0;   // se incrementa cuando se acierta una letra
let errores = 0;

esMayuscula = function (caracter) {
    let codigo;
    codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}


guardarPalabra = function () {
    let palabra;
    let esValida = true;
    // toma el texto de la caja
    palabra = document.getElementById("txtSecreta").value;

    // validar longitud
    if (palabra.length != 5) {
        esValida = false;
    } else {
        // 2validar que todas sean mayúsculas
        for (let i = 0; i < palabra.length; i++) {
            let letra = palabra.charAt(i);
            if (!esMayuscula(letra)) {
                esValida = false;
            }
        }
    }
    // si no pasa la validación
    if (!esValida) {
        alert("Debe ingresar una palabra de 5 letras MAYUSCULAS");
    } else {
        //  si pasa la validación, guardar y mostrar en consola
        palabraSecreta = palabra;
        console.log("Palabra secreta guardada: " + palabraSecreta);
    }
}

mostrarLetra = function (letra, posicion) {
    // Crear el id del div donde se mostrará la letra
    let idDiv = "div" + posicion;

    // Buscar el componente en el documento HTML
    let componente = document.getElementById(idDiv);

    // Mostrar la letra dentro del div
    componente.innerText = letra;
};

validar = function (letra) {
    let letrasEncontradas = 0; // contador de coincidencias

    for (let i = 0; i < palabraSecreta.length; i++) {
        let letraActual = palabraSecreta.charAt(i);

        if (letraActual === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas = letrasEncontradas + 1; // local
            coincidencias = coincidencias + 1;         // 🔹 global
        }
    }

    if (letrasEncontradas == 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores = errores + 1; // 🔹 global
    }

    console.log("Letras encontradas:", letrasEncontradas);
};


ingresarLetra = function () {
    let letra = document.getElementById("txtLetra").value;
    document.getElementById("txtLetra").value = "";

    if (esMayuscula(letra)) {
        intentos = intentos + 1;  //cada vez que entra a ingresarLetra

        validar(letra);           // validar letra

        // Revisar condiciones del PASO 5
        if (coincidencias == 5) {
            alert("HA GANADO");
        }
        if (intentos == 10) {
            alert("HA PERDIDO");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
};
