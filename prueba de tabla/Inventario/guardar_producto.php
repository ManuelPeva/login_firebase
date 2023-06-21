<?php
// Obtener los datos del producto enviados desde JavaScript
$data = json_decode(file_get_contents("php://input"), true);

// Capturar los valores del producto
$codigo = $data["codigo"];
$nombre = $data["nombre"];
$precio = $data["precio"];
$total = $data["total"];

// Establecer la conexión a la base de datos
$servername = "162.241.60.122";
$username = "inspir45_SISADCON";
$password = "Alumno2022+";
$dbname = "inspir45_SISADCON";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay algún error en la conexión
if ($conn->connect_error) {
  die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Crear la consulta para insertar los datos del producto en la base de datos
$sql = "INSERT INTO inventario (codigo, nombre, precio, total) VALUES ('$codigo', '$nombre', '$precio', '$total')";

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
