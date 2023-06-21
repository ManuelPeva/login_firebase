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
        text: 'No puedes repetir el mismo codigo'
      });
      return;
    }
  }

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
  xhr.open("POST", "guardar_ventas.php", true);
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
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al guardar el producto en la base de datos'
        });
      }
    }
  };

  // Convertir el objeto producto a JSON y enviarlo al servidor
  xhr.send(JSON.stringify(producto));
}
