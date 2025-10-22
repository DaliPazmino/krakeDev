//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;        
let coincidencias = 0;   
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
}

validar = function (letra) {
    let letrasEncontradas = 0; // contador de coincidencias

    for (let i = 0; i < palabraSecreta.length; i++) {
        let letraActual = palabraSecreta.charAt(i);

        if (letraActual === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas = letrasEncontradas + 1; // local
            coincidencias = coincidencias + 1;         // global
        }
    }
    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado(); // muestra la siguiente imagen del ahorcado
    }

    console.log("Letras encontradas:", letrasEncontradas);
}


ingresarLetra = function () {
    let letra = document.getElementById("txtLetra").value;
    document.getElementById("txtLetra").value = "";

    if (esMayuscula(letra)) {
        intentos++;
        validar(letra);

        // Verificar si ganó
        if (coincidencias === 5) {
            document.getElementById("ahorcadoImagen").src = "ganador.gif";
            //alert("¡HAS GANADO!");
            return;
        }

        // Verificar si perdió
        if (intentos === 10) {
            document.getElementById("ahorcadoImagen").src = "gameOver.gif";
            //alert("¡HAS PERDIDO!");
            return;
        }
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
}


mostrarAhorcado = function () {
    let img = document.getElementById("ahorcadoImagen");
    if (!img) return;
    let numero = errores.toString().padStart(2, "0"); 
    let nombreImagen = "Ahorcado_" + numero + ".png";
    img.src = nombreImagen;
    console.log("Mostrando imagen:", nombreImagen);
};
