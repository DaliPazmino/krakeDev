probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("si esta vivo");
    }

    let producto1 = {
        nombre: "Laptop HP",
        precio: "850.75",
        stock: "10"
    }

    let producto2 = {
        nombre: "Mouse Logitech",
        precio: "25.50",
        stock: "25"
    }
    console.log("Nombre del producto 1:", producto1.nombre);

    console.log("Precio del producto 2:", producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}


modificarAtributos = function (){
    let cuenta = {
        numero: "1342423",
        saldo: 0.0,
    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.logc(cuenta.saldo);
}

crearCliente = function () {
    let cliente ={
        cedula: "171231",
        nombre: "juan",
    }
  let cliente1 = {};
  cliente1.nombre = "Romeo";
  cliente1.apellido = "Salcedo";
  cliente1.cedula = "123123";
}

probarIncrementoSaldo = function (){
    let cta = { numero: "23424",saldo:34.0}
        incrementarSalcedo ();
    incrementarSalcedo (cta, 100);
    console.log(cta.saldo);
}

probarDeterminarMayor = function (){
    let per1 = {nombre:"Daniel", edad:45};
    let per2 = {nombre: "Luisa", edad: 48};
    let mayor = determinarMayor(per1, per2);
    if (mayor1!=null){
        console.log("el mayor es" + mayor.nombre);
    }
}

incrementarSalcedo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

detarminarMayor = function(persona1, persona2){
    if (persona1.edad > persona2.edad){
        return persona1;
        
    }else if (persona2.edad>persona1.edad){
        return null;
    }
}