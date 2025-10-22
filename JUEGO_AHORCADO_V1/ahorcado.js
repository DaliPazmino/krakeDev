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



