let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1102456789", nombre: "Maria", apellido: "Lopez", sueldo: 750.0 } // <-- agregado
];

mostrarEmpleados = function () {
    let contenedor = document.getElementById("tablaEmpleados");
    let tabla = "<table><tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>APELLIDO</th>"
        + "<th>SUELDO</th>"
        + "</tr>";

    for (let i = 0; i < empleados.length; i++) {
        let e = empleados[i];
        tabla += "<tr>"
            + "<td>" + e.cedula + "</td>"
            + "<td>" + e.nombre + "</td>"
            + "<td>" + e.apellido + "</td>"
            + "<td>" + e.sueldo + "</td>"
            + "</tr>";
    }
    tabla += "</table>";
    contenedor.innerHTML = tabla;
}
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgEmpleado", "./imagenes/empleado.png");
    mostrarEmpleados();
    deshabilitarFormularioEmpleado();
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgRol", "./imagenes/rol.png");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
    mostrarImagen("imgResumen", "./imagenes/resumen.png");
}

ejecutarNuevo = function () {
    habilitarFormularioEmpleado();
    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == cedula) {
            empleadoEncontrado = empleados[i];
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let encontrado = buscarEmpleado(empleado.cedula);
    if (encontrado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let esValido = true;

    if (cedula.length != 10 || isNaN(cedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener exactamente 10 digitos numericos");
        esValido = false;
    } else {
        mostrarTexto("lblErrorCedula", "");
    }
    if (nombre.length < 3 || nombre != nombre.toUpperCase()) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y estar en mayusculas");
        esValido = false;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }

    if (apellido.length < 3 || apellido != apellido.toUpperCase()) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres y estar en mayusculas");
        esValido = false;
    } else {
        mostrarTexto("lblErrorApellido", "");
    }

    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un número entre 400 y 5000");
        esValido = false;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }

    if (!esValido) {
        return;
    }

    if (esNuevo) {
        let nuevoEmpleado = {};
        nuevoEmpleado.cedula = cedula;
        nuevoEmpleado.nombre = nombre;
        nuevoEmpleado.apellido = apellido;
        nuevoEmpleado.sueldo = sueldo;

        let resultado = agregarEmpleado(nuevoEmpleado);

        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado();
            esNuevo = false;
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
        }
    } else { // Si no es nuevo, se modifica
        let empleado = buscarEmpleado(cedula);
        if (empleado != null) {
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado();
            esNuevo = false;
        }
    }
}

ejecutarBusqueda = function () {
    let cedulaBuscar = recuperarTexto("txtBusquedaCedula");
    let empleadoEncontrado = buscarEmpleado(cedulaBuscar);

    if (empleadoEncontrado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);

        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");

        esNuevo = false;
    }
}
deshabilitarFormularioEmpleado = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

habilitarFormularioEmpleado = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}
limpiar = function (){
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");

    esNuevo = false;

    deshabilitarFormularioEmpleado();
}
//parte 5

buscarPorRol = function (){
    let cedulaRol = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedulaRol);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        document.getElementById("infoCedula").textContent = "";
        document.getElementById("infoNombre").textContent = "";
        document.getElementById("infoSueldo").textContent = "";
    } else {
        document.getElementById("infoCedula").textContent = empleado.cedula;
        document.getElementById("infoNombre").textContent = empleado.nombre + " " + empleado.apellido;
        document.getElementById("infoSueldo").textContent = empleado.sueldo;
    }
}

// --- 9.45% del sueldo ---
calcularAporteEmpleado = function (sueldo){
    return sueldo * 0.0945;
};

// --- sueldo - aporte IESS - descuento ---
calcularValorAPagar = function (sueldo, aporteIESS, descuento){
    return sueldo - aporteIESS - descuento;
};

// --- handler del botón CALCULAR en la sección ROL ---
calcularRol = function (){
    // sueldo viene de un <div class="info">, se lee con textContent
    let sueldoTexto = document.getElementById("infoSueldo").textContent;
    let sueldo = parseFloat(sueldoTexto);
    // descuento viene de <input>, se usa recuperarFloat que ya tienes
    let descuento = recuperarFloat("txtDescuentos");

    if (isNaN(sueldo)){
        alert("Primero busque un empleado valido.");
        return;
    }
    if (isNaN(descuento) || descuento < 0){
        alert("Ingrese un descuento valido (numero).");
        return;
    }

    let aporte = calcularAporteEmpleado(sueldo);
    let pago = calcularValorAPagar(sueldo, aporte, descuento);

    // mostrar resultados en los divs info
    document.getElementById("infoIESS").textContent = aporte.toFixed(2);
    document.getElementById("infoPago").textContent = pago.toFixed(2);
}
