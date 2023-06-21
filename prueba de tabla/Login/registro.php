<?php
// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los valores del formulario
    $username = $_POST["username"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Establecer la conexión con la base de datos
    $servername = "162.241.60.122";
    $username_db = "inspir45_SISADCON";
    $password_db = "Alumno2022+";
    $dbname = "inspir45_SISADCON";

    // Crear la conexión
    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    // Verificar si la conexión fue exitosa
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Crear la consulta para insertar los datos en la base de datos (utilizar sentencias preparadas para mayor seguridad)
    $stmt = $conn->prepare("INSERT INTO usuarios (username, lastname, email, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $lastname, $email, $password);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar: " . $stmt->error;
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
}
?>
