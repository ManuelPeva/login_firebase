const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const Users = JSON.parse(localStorage.getItem('users')) || [];
  const validUser = Users.filter(user => user.email === email && user.password === password);
  
  if (validUser.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: '¡Advertencia!',
      text: 'Usuario y/o contraseña incorrecta',
      showConfirmButton: false,
      timer: 2000
    });

  } else {
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: `Bienvenido ${validUser[0].name}`,
      showConfirmButton: false,
      timer: 2000,
      willClose: () => {
        localStorage.setItem('login_success', JSON.stringify(validUser));
        window.location.href = 'index.html';
      }
    });
  }
});
;