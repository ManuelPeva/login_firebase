<?php
// Conexión a la base de datos
$servername = "162.241.60.122";
$username = "inspir45_SISADCON";
$password = "Alumno2022+";
$dbname = "inspir45_SISADCON";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtener los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Consulta para verificar el usuario y contraseña
    $query = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($query);

    if ($result->num_rows == 1) {
        // El usuario y contraseña son correctos
        // Iniciar sesión o establecer una sesión de usuario
        session_start();
        $_SESSION["username"] = $username;

        // Redireccionar al usuario a la página de inicio después del inicio de sesión exitoso
        header("Location: index.html");
        exit();
    } else {
        // Usuario o contraseña incorrectos
        echo "Usuario o contraseña incorrectos";
    }
}

$conn->close();
?>
