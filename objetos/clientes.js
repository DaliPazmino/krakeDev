let cliente = [{ cedula: "1234", nombre: "Juan", edad: "23" },
{ cedula: "1434", nombre: "Lola", edad: "13" },
{ cedula: "1534", nombre: "Eve", edad: "33" }
]

guardarCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    
    let datosCliente = {}
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}

modificarCliente = function (clienteDatos) {
    let clienteEncontrado = buscarCliente(clienteDatos.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = clienteDatos.nombre;
        clienteEncontrado.edad = clienteDatos.edad;
    }
}

crearCliente = function () { // <- antes estaba crearCleinte
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {}
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente = function (nuevoCliente) {
    let resultado;
    resultado = buscarCliente(nuevoCliente.cedula);
    if (resultado == null) {
        cliente.push(nuevoCliente); // <- antes era cliente.push(cliente)
        alert("cliente agregado");
        mostrarClientes();
    } else {
        alert("ya existe el cliente con la cedula: " + nuevoCliente.cedula)
    }
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda"); // <- antes agregarTexto
    let respuesta = buscarCliente(valorCedula);            // <- antes sbuscarCliente
    if (respuesta == null) {
        alert("cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", respuesta.cedula);
        mostrarTextoEnCaja("txtNombre", respuesta.nombre);
        mostrarTextoEnCaja("txtEdad", respuesta.edad);
    }
}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < cliente.length; i++) {
        elementoCliente = cliente[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +   // <- antes CEDULAA y sin cerrar
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elementoCliente;
    for (let i = 0; i < cliente.length; i++) { // <- antes clients.length
        elementoCliente = cliente[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
