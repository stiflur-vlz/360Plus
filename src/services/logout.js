import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let exit = document.getElementById("exit");
exit.addEventListener("click", function (evento) {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Gacias, Adíos!",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href=""
    })
    .catch((error) => {
      // An error happened.

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Por qué tengo este problema?</a>',
      });
    });
});
