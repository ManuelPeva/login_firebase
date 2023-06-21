<?php
// Obtener los datos del producto enviados desde JavaScript
$data = json_decode(file_get_contents("php://input"), true);

// Capturar los valores del producto
$codigo = $data["codigo"];
$precio = $data["precio"];
$kg = $data["kg"];
$total = $data["total"];

// Realizar las operaciones para guardar los datos en la base de datos
// Aquí debes establecer la conexión a tu base de datos y ejecutar la consulta correspondiente

// Ejemplo de conexión a la base de datos utilizando mysqli
$servername = "162.241.60.122";
$username = "inspir45_SISADCON";
$password = "Alumno2022+";
$dbname = "inspir45_SISADCON";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay algún error en la conexión
if ($conn->connect_error) {
  die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Crear la consulta para insertar los datos del producto en la base de datos
$sql = "INSERT INTO inventario (codigo, precio, kg, total) VALUES ('$codigo', '$precio', '$kg', '$total')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
  // Producto guardado correctamente
  $response = array("success" => true);
} else {
  // Error al guardar el producto
  $response = array("success" => false);
}

// Devolver la respuesta al cliente (JavaScript)
header("Content-Type: application/json");
echo json_encode($response);

// Cerrar la conexión
$conn->close();
?>
