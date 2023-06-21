function editarProducto(boton) {
    var fila = boton.parentNode.parentNode;
    var celdaCodigo = fila.cells[0];
    var celdaNombre = fila.cells[1];
    var celdaPrecio = fila.cells[2];
    var celdaKg = fila.cells[3];
  
    var codigo = celdaCodigo.innerHTML;
    var nombre = celdaNombre.innerHTML;
    var precio = parseFloat(celdaPrecio.innerHTML);
    var kg = parseFloat(celdaKg.innerHTML);
  
    // Crear un formulario de edición
    var formulario = document.createElement("form");
    
    // Código
    var inputCodigo = document.createElement("input");
    inputCodigo.type = "text";
    inputCodigo.value = codigo;
    formulario.appendChild(inputCodigo);
  
    // Nombre
    var inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.value = nombre;
    formulario.appendChild(inputNombre);
  
    // Precio
    var inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.value = precio;
    formulario.appendChild(inputPrecio);
  
    // Kg
    var inputKg = document.createElement("input");
    inputKg.type = "number";
    inputKg.value = kg;
    formulario.appendChild(inputKg);
  
    // Botón Guardar
    var botonGuardar = document.createElement("button");
    botonGuardar.innerHTML = "Guardar";
    botonGuardar.onclick = function() {
      guardarCambios(fila, inputCodigo.value, inputNombre.value, inputPrecio.value, inputKg.value);
    };
    formulario.appendChild(botonGuardar);
  
    // Reemplazar los datos de la fila por el formulario
    fila.innerHTML = "";
    fila.appendChild(formulario);
  }
  
  function guardarCambios(fila, codigo, nombre, precio, kg) {
    // Realizar la lógica para guardar los cambios del producto
    // Puedes realizar una petición al servidor, actualizar la base de datos, etc.
  
    // Crear nuevas celdas con los datos actualizados
    var celdaCodigo = document.createElement("td");
    celdaCodigo.innerHTML = codigo;
  
    var celdaNombre = document.createElement("td");
    celdaNombre.innerHTML = nombre;
  
    var celdaPrecio = document.createElement("td");
    celdaPrecio.innerHTML = precio;
  
    var celdaKg = document.createElement("td");
    celdaKg.innerHTML = kg;
  
    // Volver a agregar las celdas a la fila
    fila.innerHTML = "";
    fila.appendChild(celdaCodigo);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaKg);
  
    // Agregar botones de editar y eliminar a la celda de acciones
    var celdaAcciones = document.createElement("td");
  
    var botonEditar = document.createElement("button");
    botonEditar.innerHTML = "Editar";
    botonEditar.className = "button edit";
    botonEditar.onclick = function() {
      editarProducto(this);
    };
    celdaAcciones.appendChild(botonEditar);
  
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Eliminar";
    botonBorrar.className = "button delete";
    botonBorrar.onclick = function() {
      borrarFila(this);
    };
    celdaAcciones.appendChild(botonBorrar);
  
    fila.appendChild(celdaAcciones);
  }
  