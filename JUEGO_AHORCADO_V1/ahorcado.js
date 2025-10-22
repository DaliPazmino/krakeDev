//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (caracter) {
    let codigo;
    codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}

let palabraSecreta; // variable global

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

    // Recorremos cada letra de la palabra secreta
    for (let i = 0; i < palabraSecreta.length; i++) {
        let letraActual = palabraSecreta.charAt(i);

        // Si coincide con la letra que ingresó el usuario
        if (letraActual === letra) {
            mostrarLetra(letra, i);   // la muestra en la posición correcta
            letrasEncontradas = letrasEncontradas + 1; // suma 1 al contador
        }
    }

    // Solo para comprobar en consola cuántas letras se encontraron
    console.log("Letras encontradas:", letrasEncontradas);
};


ingresarLetra = function () {
    // 1️⃣ Recuperar la letra escrita por el usuario
    let letra = document.getElementById("txtLetra").value;

    // 2️⃣ Limpiar la caja de texto para que quede vacía
    document.getElementById("txtLetra").value = "";

    // 3️⃣ Verificar que la letra esté en mayúscula
    if (esMayuscula(letra)) {
        validar(letra); // ✅ Si es mayúscula, llamamos a validar
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
};
