import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);



    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);

        const sigupModal = document.querySelector('#sigupModal');
        const modal = bootstrap.Modal.getInstance(sigupModal);
        modal.hide();

        Swal.fire({
            title: 'Bienvenido',
            text: userCredentials.user.email,
            icon: 'success'
          });
          

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Swal.fire('Error', 'Este correo ya se encuentra asociado en SISADCON', 'error');
          } else if (error.code === 'auth/invalid-email') {
            Swal.fire('Advertencia', 'Verifique su email', 'warning');
          } else if (error.code === 'auth/weak-password') {
            Swal.fire('Advertencia', 'Se requiere una contraseña más fuerte', 'warning');
          } else if (error.code) {
            Swal.fire('Error', 'Algo salió mal', 'error');
          }

        /*
        if (error.code === 'auth/email-already-in-use') {
            alert('Este correo ya se encuentra asociado en SISADCON')
        }
        else if (error.code === 'auth/invalid-email') {
            alert('Verfique su email 🧐')
        } else if (error.code === 'auth/weak-password') {
            alert('Se requiere una contraseña mas fuerte 🧐')
        }else if (error.code){
            alert('Algo salio mal 😥')
        }*/

    }
});

