function agregarProducto() {
  var codigo = document.getElementById("codigo").value;
  var precio = parseFloat(document.getElementById("precio").value);
  var kg = parseFloat(document.getElementById("kg").value);
  var total = precio;

  if (codigo === "" || isNaN(precio) || isNaN(kg)) {
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

  var tabla = document.getElementById("inventario");
  var fila = tabla.insertRow();

  var celdaCodigo = fila.insertCell(0);
  celdaCodigo.innerHTML = codigo;

  var celdaPrecio = fila.insertCell(1);
  celdaPrecio.innerHTML = precio;

  var celdaKg = fila.insertCell(2);
  celdaKg.innerHTML = kg;

  var celdaTotal = fila.insertCell(3);
  celdaTotal.innerHTML = total;

  var celdaAcciones = fila.insertCell(4);

  var botonBorrar = document.createElement("button");
  botonBorrar.innerHTML = "X";
  botonBorrar.className = "button delete"
  botonBorrar.onclick = function () {
    borrarFila(this);
  };
  celdaAcciones.appendChild(botonBorrar);
}

function borrarFila(boton) {
  var fila = boton.parentNode.parentNode;
  fila.remove();
}

function editarProducto(boton) {
  var fila = boton.parentNode.parentNode;
  var celdaCodigo = fila.cells[0];
  var celdaPrecio = fila.cells[1];
  var celdaKg = fila.cells[2];

  var codigo = celdaCodigo.innerHTML;
  var precio = parseFloat(celdaPrecio.innerHTML);
  var kg = parseFloat(celdaKg.innerHTML);

  // Aquí puedes implementar la lógica para editar el producto
  // Puedes abrir un formulario de edición, mostrar un modal, etc.
}

// Aquí está la función para exportar a Excel
function exportarExcel() {
  // Crear un objeto de workbook
  var wb = XLSX.utils.table_to_book(document.getElementById('inventario'), { sheet: "Inventario" });

  // Guardar el archivo como libro de Excel
  XLSX.writeFile(wb, 'creado_con_SISADCON.xlsx');
}

// Aquí está la función para enviar los datos al servidor
function enviarDatosServidor(producto) {
  fetch('guardar_producto.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(producto)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        // Producto guardado correctamente en la base de datos
        // Aquí puedes realizar cualquier acción adicional, como mostrar un mensaje de éxito, actualizar la tabla, etc.
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El producto se ha guardado correctamente'
        });
      } else {
        // Error al guardar el producto
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar el producto en la base de datos'
        });
      }
    })
    .catch(function (error) {
      // Error en la solicitud AJAX
      console.error('Error:', error);
    });
}
