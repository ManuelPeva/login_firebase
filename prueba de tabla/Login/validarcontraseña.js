function validatePassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;

    if (regex.test(password)) {
        // Contraseña válida
        // Aquí puedes realizar las acciones adicionales que desees, como enviar el formulario o redireccionar al usuario
        redirectToInicio();
    } else {
        // Contraseña no cumple con los requisitos
        alert("La contraseña debe tener al menos 8 caracteres y contener letras mayúsculas, minúsculas, números y símbolos.");
    }
}

function redirectToInicio() {
    // Redireccionar al usuario a la página de inicio
    window.location.href = "index.html";
}