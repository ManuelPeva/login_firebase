<?php
// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los valores del formulario
    $username = $_POST["username"];
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

    // Crear la consulta para verificar las credenciales (mejor utilizar sentencias preparadas para mayor seguridad)
    $sql = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";

    // Ejecutar la consulta
    $result = $conn->query($sql);

    // Verificar si se encontró un registro con las credenciales ingresadas
    if ($result->num_rows > 0) {
        // Inicio de sesión exitoso
        // Redirigir a main.html
        header("Location: main.html");
        exit; // Asegurarse de detener la ejecución del script después de la redirección
    } else {
        // Credenciales incorrectas
        echo "Credenciales incorrectas";
    }

    // Cerrar la conexión
    $conn->close();
}
?>
