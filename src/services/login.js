import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let buttonIngresar = document.getElementById("buttonIngresar");

buttonIngresar.addEventListener("click", function (evento) {
  evento.preventDefault();

  let email = document.getElementById("entraremail").value;
  let password = document.getElementById("entrarpassword").value;
  let formulario = document.getElementById("formularioingresar");

  console.log(email, password);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Registro Exitoso!",
        showConfirmButton: false,
        timer: 2000,
      });
      formulario.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      Swal.fire({
        icon: "error",
        title: "¡Oops!",
        text: errorCode + errorMessage,
      });
    });
});
