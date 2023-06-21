<?php
$servername = "162.241.60.122";
$username = "inspir45_SISADCON";
$password = "Alumno2022+"; 
$dbname = "inspir45_SISADCON";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
