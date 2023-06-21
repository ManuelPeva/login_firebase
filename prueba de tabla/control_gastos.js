function agregarProducto() {
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var precio = parseFloat(document.getElementById("precio").value);
    var kg = parseFloat(document.getElementById("kg").value);
    var fecha = parseFloat(document.getElementById("fecha").value);
    var total = precio + kg;

    if (codigo === "" || nombre === "" || isNaN(precio) || isNaN(kg) || fecha === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Por favor, complete todos los campos correctamente'
        });
        return;
    }

    var tabla = document.getElementById("inventario");
    var fila = tabla.insertRow();

    var celdaCodigo = fila.insertCell(0);
    celdaCodigo.innerHTML = codigo;

    var celdaNombre = fila.insertCell(1);
    celdaNombre.innerHTML = nombre;

    var celdaPrecio = fila.insertCell(2);
    celdaPrecio.innerHTML = precio;

    var celdaKg = fila.insertCell(3);
    celdaKg.innerHTML = kg;

    var celdaTotal = fila.insertCell(4);
    celdaTotal.innerHTML = total;

    var celdaAcciones = fila.insertCell(5);

    var celdaFecha = fila.insertCell(6);
    celdaFecha.innerHTML = fecha;

    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "X";
    botonBorrar.className = "button delete";
    botonBorrar.onclick = function () {
        borrarFila(this);
    };
    celdaAcciones.appendChild(botonBorrar);

    // Crear un objeto con los datos del producto
    var producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        kg: kg,
        fecha: fecha,
        total: total
    };

    // Realizar una petición al servidor para guardar los datos
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "guardar_controldegastos.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // La respuesta del servidor fue exitosa, puedes mostrar un mensaje de éxito o realizar alguna otra acción necesaria
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'El producto se guardó correctamente en la base de datos'
                });

                // Restablecer los campos del formulario
                document.getElementById("codigo").value = "";
                document.getElementById("nombre").value = "";
                document.getElementById("precio").value = "";
                document.getElementById("kg").value = "";
                document.getElementById("fecha").value = "";
            } else {
                // Hubo un error en la respuesta del servidor, puedes mostrar un mensaje de error o realizar alguna otra acción necesaria
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'El producto se guardó correctamente en la base de datos'
                });
            }
        }
    };

    // Convertir el objeto de producto a formato JSON y enviarlo al servidor
    xhr.send(JSON.stringify(producto));
}
