import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js'

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

 
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"));
        modal.hide();
        
        Swal.fire({
            title: 'Bienvenido',
            text: credentials.user.email,
            icon: 'success'
          });

          //Aqui va la redirección del proyecto
          window.location.href = 'https://sisadcon.inspirasmx.com/index.html';
          //fin de la redirección
          
        //if(credentials === credentials){
        //    Swal.fire('Bienvenido','Da click en ok y cerrar', 'success');
       // }
    } catch (error) {
        if (error.code === "auth/wrong-password") {
            Swal.fire('Error', 'La contraseña es incorrecta', 'error');
        } else if (error.message === "auth/user-not-found") {
            Swal.fire('Error', 'usuario no registrado en SISADCON', 'error');
        } else if (error.message === "auth/user-not-found") {
            Swal.fire('Error', 'usuario no registrado', 'error');
        }
        else {
            Swal.fire('Advertencia', error.message, 'warning');
        }

    }

})



