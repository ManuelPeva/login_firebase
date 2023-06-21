<?php
// Obtener los valores del formulario
$concepto = $_POST['concepto'];
$monto = $_POST['monto'];

// Aquí puedes agregar la lógica para almacenar los datos del gasto, como insertarlos en una base de datos o guardarlos en un archivo.

// Redirigir al usuario de regreso al archivo control_gastos.html
header("Location: control_gastos.html");
exit;
?>
