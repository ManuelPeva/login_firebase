function agregarProducto() {
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

  // Enviar los datos al servidor
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "guardar_producto.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // La inserción en la base de datos fue exitosa
      console.log("Producto guardado correctamente");
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      // Hubo un error en la inserción en la base de datos
      console.error("Error al guardar el producto");
    }
  };
  var params = "codigo=" + encodeURIComponent(codigo) +
    "&nombre=" + encodeURIComponent(nombre) +
    "&precio=" + encodeURIComponent(precio) +
    "&kg=" + encodeURIComponent(kg) +
    "&fecha=" + encodeURIComponent(fecha);
  xhr.send(params);
}

function borrarFila(boton) {
  var fila = boton.parentNode.parentNode;
  fila.remove();
}

function editarProducto(boton) {
  var fila = boton.parentNode.parentNode;
  var celdaCodigo = fila.cells[0];
  var celdaNombre = fila.cells[1];
  var celdaPrecio = fila.cells[2];
  var celdaKg = fila.cells[3];
  var celdaFecha = fila.cells[4];

  var codigo = celdaCodigo.innerHTML;
  var nombre = celdaNombre.innerHTML;
  var precio = parseFloat(celdaPrecio.innerHTML);
  var kg = parseFloat(celdaKg.innerHTML);
  var fecha = parseFloat(celdaFecha);

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
