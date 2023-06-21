import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js'


const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide();

        Swal.fire({
            title: 'Bienvenido',
            text: credentials.user.displayName,
            icon: 'success'
        });
        //Aqui va la redirección del proyecto
        window.location.href = 'https://sisadcon.inspirasmx.com/index.html';
         // Reemplaza con tu URL
         //fin
        console.log(credentials)
    } catch (error) {
        console.log(error)

    }

});