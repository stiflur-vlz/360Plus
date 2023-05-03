let contenedorProductos = document.getElementById("row");

//I hear click on the row

let productInformation = {};

contenedorProductos.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("img-fluid")) {
    productInformation.picture =
      evento.target.parentElement.querySelector("img").src;
    productInformation.name =
      evento.target.parentElement.querySelector("h3").textContent;
    productInformation.price =
      evento.target.parentElement.querySelector("h4").textContent;
    productInformation.popularity =
      evento.target.parentElement.querySelector("h2").textContent;
    productInformation.Description =
      evento.target.parentElement.querySelector("h5").textContent;

    //saving an object in memory
    localStorage.setItem("product", JSON.stringify(productInformation));
    window.location.href = "./ampliarInfo.html";
  }
});
