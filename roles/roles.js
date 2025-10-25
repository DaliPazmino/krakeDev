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

buscarEmpleado = function(cedula){
    let empleadoEncontrado = null;
    for(let i = 0; i < empleados.length; i++){
        if(empleados[i].cedula == cedula){
            empleadoEncontrado = empleados[i];
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function(empleado){
    let encontrado = buscarEmpleado(empleado.cedula);
    if(encontrado == null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }
}

guardar = function(){
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let esValido = true;

    if(cedula.length != 10 || isNaN(cedula)){
        mostrarTexto("lblErrorCedula", "La cédula debe tener exactamente 10 dígitos numéricos");
        esValido = false;
    }else{
        mostrarTexto("lblErrorCedula", "");
    }
    if(nombre.length < 3 || nombre != nombre.toUpperCase()){
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y estar en mayúsculas");
        esValido = false;
    }else{
        mostrarTexto("lblErrorNombre", "");
    }

    if(apellido.length < 3 || apellido != apellido.toUpperCase()){
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres y estar en mayúsculas");
        esValido = false;
    }else{
        mostrarTexto("lblErrorApellido", "");
    }

    if(isNaN(sueldo) || sueldo < 400 || sueldo > 5000){
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un número entre 400 y 5000");
        esValido = false;
    }else{
        mostrarTexto("lblErrorSueldo", "");
    }

    if(!esValido){
        return;
    }

    if(esNuevo){
        let nuevoEmpleado = {};
        nuevoEmpleado.cedula = cedula;
        nuevoEmpleado.nombre = nombre;
        nuevoEmpleado.apellido = apellido;
        nuevoEmpleado.sueldo = sueldo;

        let resultado = agregarEmpleado(nuevoEmpleado);

        if(resultado){
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarFormularioEmpleado(); 
        }else{
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
        }
    }
}


deshabilitarFormularioEmpleado = function (){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

habilitarFormularioEmpleado = function (){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}
