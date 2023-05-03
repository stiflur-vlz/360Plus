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