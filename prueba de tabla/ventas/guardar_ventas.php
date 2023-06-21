<?php
// Obtener los datos del producto desde la solicitud
$producto = json_decode(file_get_contents("php://input"), true);

// Conectar a la base de datos (debes proporcionar tus propios datos de conexión)
$servername = "162.241.60.122";
$username = "inspir45_SISADCON";
$password = "Alumno2022+";
$dbname = "inspir45_SISADCON";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  // Si hay un error en la conexión a la base de datos, enviar una respuesta con estado de error al cliente
  http_response_code(500);
  die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Preparar la consulta SQL para insertar el producto en la tabla correspondiente (debes ajustar el nombre de la tabla según tu base de datos)
$sql = "INSERT INTO productos (codigo, nombre, precio, kg, fecha, total) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssddds", $producto['codigo'], $producto['nombre'], $producto['precio'], $producto['kg'], $producto['fecha'], $producto['total']);

// Ejecutar la consulta
if ($stmt->execute()) {
  // Si la consulta se ejecuta correctamente, enviar una respuesta con estado de éxito al cliente
  http_response_code(200);
  echo "Producto guardado correctamente";
} else {
  // Si hay un error en la ejecución de la consulta, enviar una respuesta con estado de error al cliente
  http_response_code(500);
  echo "Error al guardar el producto en la base de datos: " . $stmt->error;
}

// Cerrar la conexión a la base de datos
$stmt->close();
$conn->close();
?>
