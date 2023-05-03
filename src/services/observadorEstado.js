import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
let exit = document.getElementById("exit")
let usuario = document.getElementById("usuario")

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log(user.email)
    let usuario = document.getElementById("usuario") 
    usuario.textContent=user.email
    exit.classList.remove("d-none")
    usuario.classList.remove("d-none")
  } else {
    // User is signed out   
    exit.classList.add("d-none")
    usuario.classList.add("d-none")
  }
});
