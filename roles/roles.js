let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1102456789",nombre:"Maria",apellido:"Lopez",sueldo:750.0} // <-- agregado
];

mostrarEmpleados = function (){
    let contenedor = document.getElementById("tablaEmpleados");
    let tabla = "<table><tr>"
              + "<th>CEDULA</th>"
              + "<th>NOMBRE</th>"
              + "<th>APELLIDO</th>"
              + "<th>SUELDO</th>"
              + "</tr>";

    for (let i = 0; i < empleados.length; i++){
        let e = empleados[i];
        tabla += "<tr>"
              +  "<td>" + e.cedula   + "</td>"
              +  "<td>" + e.nombre   + "</td>"
              +  "<td>" + e.apellido + "</td>"
              +  "<td>" + e.sueldo   + "</td>"
              +  "</tr>";
    }
    tabla += "</table>";
    contenedor.innerHTML = tabla;
}
mostrarOpcionEmpleado = function (){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgEmpleado", "./imagenes/empleado.png");
    mostrarEmpleados();
}

mostrarOpcionRol = function (){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarImagen("imgRol", "./imagenes/rol.png");
}

mostrarOpcionResumen = function (){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
    mostrarImagen("imgResumen", "./imagenes/resumen.png");
}

