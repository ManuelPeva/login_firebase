<?php
$servername = "162.241.60.122";
$username = "inspir45_SISADCON";
$password = "Alumno2022+";
$dbname = "inspir45_SISADCON";

// Obtener los datos enviados desde JavaScript
$codigo = $_POST['codigo'];
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$kg = $_POST['kg'];
$fecha = $_POST['fecha'];
$total = $precio * $kg;

// Crear la conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay error en la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Preparar la consulta SQL para insertar los datos del producto
$stmt = $conn->prepare("INSERT INTO productos (codigo, nombre, precio, kg, fecha, total) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssddds", $codigo, $nombre, $precio, $kg, $fecha, $total);

// Ejecutar la consulta
if ($stmt->execute()) {
    // La inserción fue exitosa
    http_response_code(200);
} else {
    // Hubo un error en la inserción
    http_response_code(500);
}

// Cerrar la conexión y liberar recursos
$stmt->close();
$conn->close();
?>
