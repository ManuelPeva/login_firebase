const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return Swal.fire({
            icon: 'warning',
            title: '¡Advertencia!',
            text: 'Esta cuenta ya esta registrada.',
            showConfirmButton: false,
            timer: 3000
          });
          
    }
    /*Si no esta registrado se almacenara */
    Users.push({name:name, email:email, password:password});
    localStorage.setItem('users',JSON.stringify(Users))
    Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 2000
      });
    //redireccionar al login
    //window.location.href = 'login.html'
})