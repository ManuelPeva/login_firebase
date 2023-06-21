<?php
// Conectar a la base de datos
$servername = "162.241.60.122t";
$usernameDB = "inspir45_SISADCON";
$passwordDB = "Alumno2022+";
$dbname = "inspir45_SISADCON";

$conn = new mysqli($servername, $usernameDB, $passwordDB, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

function agregarProducto() {
  // Obtener los valores del formulario
  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var precio = parseFloat(document.getElementById("precio").value);
  var kg = parseFloat(document.getElementById("kg").value);
  var fecha = parseFloat(document.getElementById("fecha").value);
  var total = precio * kg;

  if (codigo === "" || nombre === "" || isNaN(precio) || isNaN(kg) || fecha === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Por favor, complete todos los campos correctamente'
    });
    return;
  }

  // Validar duplicados
  var inventario = document.getElementById("inventario");
  var filas = inventario.getElementsByTagName("tr");

  for (var i = 1; i < filas.length; i++) {
    var codigoExistente = filas[i].cells[0].innerHTML;

    if (codigoExistente === codigo) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No puedes repetir el mismo código'
      });
      return;
    }
  }

  // Insertar el producto en la base de datos
  var query = "INSERT INTO inventario (codigo, nombre, precio, kg, total, fecha) VALUES ('$codigo', '$nombre', '$precio', '$kg', '$total', '$fecha')";

  if ($conn->query($query) === TRUE) {
    // Producto insertado correctamente
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
    botonBorrar.className = "button delete"
    botonBorrar.onclick = function () {
      borrarFila(this);
    };
    celdaAcciones.appendChild(botonBorrar);

    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'El producto se ha agregado correctamente'
    });
  } else {
    // Error al insertar el producto
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ha ocurrido un error al agregar el producto. Por favor, inténtalo de nuevo'
    });
  }
}


