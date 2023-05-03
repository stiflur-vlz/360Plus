//calling the memory
let product = JSON.parse(localStorage.getItem("product"));
console.log(product);

let carMemory = JSON.parse(localStorage.getItem("car"));
console.log(carMemory);

let car;

if (JSON.parse(localStorage.getItem("car")) != null) {
  car = JSON.parse(localStorage.getItem("car"));
  let pill = document.getElementById("pill");
  pill.textContent = car.length;
} else {
  car = [];
}

//references the name del product
let name = document.getElementById("nameInfo");
name.textContent = product.name;

//references the picture of product
let picture = document.getElementById("pictureInfo");
picture.src = product.picture;

//references the Description the product
let Description = document.getElementById("DescriptionInfo");
Description.textContent = product.Description;

//references the price of product
let price = document.getElementById("priceInfo");
price.textContent = product.price;

//references the  popularity
let popularity = document.getElementById("popularityInfo");
popularity.classList.add("d-none");
popularity.textContent = product.popularity;

//creating stars

//Redondeamos la popularidad para mostrar en las estrellas
let valorProducto = Math.round(product.popularity)

//Recorremos el valor de la popularidad y pintamos las estrellas
for (let index = 1; index <= valorProducto; index++) {
    if (index == 1) {
        let estrella1 = document.getElementById('1estrella')
        estrella1.classList.add("text-warning")
    }else if(index == 2){
        let estrella2 = document.getElementById('2estrella')
        estrella2.classList.add("text-warning")
    }else if(index == 3){
        let estrella3 = document.getElementById('3estrella')
        estrella3.classList.add("text-warning")
    }else if(index == 4){
        let estrella4 = document.getElementById('4estrella')
        estrella4.classList.add("text-warning")
    }else{
        let estrella5 = document.getElementById('5estrella')
        estrella5.classList.add("text-warning")
    }
}


let pill = document.getElementById("pill");
console.log(pill.textContent);

//I hear the click on the button add to cart
let addCar = document.getElementById("addCar");
addCar.addEventListener("click", function () {
  let quantity = document.getElementById("quantityProduct");
  quantity = quantity.value;
  console.log("add: " + quantity);

  //add the quantity a objeto product
  product.quantity = quantity;
  console.log(product);

  //add the product of car the shopping
  car.push(product);
  console.log(car);

  //add the car of the memory
  localStorage.setItem("car", JSON.stringify(car));

  //Painting the pill with quantitythe products
  let quantityCar = car.length;
  pill.textContent = quantityCar;
});
