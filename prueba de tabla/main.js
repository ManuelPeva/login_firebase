const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

//configuración de usuario
document.getElementById('config-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtén los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;

    // Actualiza el nombre de usuario en el slidebar
    document.getElementById('username').textContent = nombre;

    // Puedes hacer algo más con los valores ingresados, como enviarlos al servidor para guardarlos en la base de datos

    // Restablece los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
});

//ocultar configuración
// Obtén el enlace de configuración por su ID
const configLink = document.getElementById('config-link');

// Obtén la sección de configuración por su ID
const configSection = document.getElementById('config-section');

// Agrega un evento de clic al enlace de configuración
configLink.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Muestra u oculta la sección de configuración
    if (configSection.style.display === 'none') {
        configSection.style.display = 'block';
    } else {
        configSection.style.display = 'none';
    }
});

//cerrar y no volver
const logoutLink = document.getElementById('logout-link');
logoutLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.close();
});

