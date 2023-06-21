import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from './app/firebase.js';
import './app/firebase.js'
import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/logout.js'
import {loginCheck} from './app/loginCheck.js'

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
   /* if(user){
        loginCheck(user)
    }else{
        loginCheck(user)
    }*/
}) 


