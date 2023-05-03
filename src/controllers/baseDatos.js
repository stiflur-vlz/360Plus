let products = [
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 350,
    popularity: 5,
    Description: "This is a fine ring",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 100,
    popularity: 4,
    Description: "Typical earrings for travel!",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 3500,
    popularity: 5,
    Description:
      "Pisa Ring made of 18 Karat Golden Gold, offers a Modern and Glamorous Fan-shaped design with a central Zircon loaded with Shine, a significant Piece to remember this special day.",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 760,
    popularity: 2,
    Description:
      "Open ring in 18K yellow gold in the shape of a panther from the Le Marché des Merveilles collection. Engraved, red enamel animal has brilliant-cut diamond eyes",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 1000,
    popularity: 3,
    Description:
      "18-karat yellow gold studs, flower, with 2 central 0.40 ct diamonds and 0.60 ct diamond decoration, 7.50 mm. wide, from the flowers for you collection",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 4700,
    popularity: 4,
    Description:
      "Flat oval 18-carat yellow gold earrings with 0.50 ct emeralds and 0.45 ct diamonds",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 2000,
    popularity: 2,
    Description:
      "18k red gold earrings with 2.17 ct rubies and 0.06 ct diamonds",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 680,
    popularity: 5,
    Description:
      "Ring in 18 karat white gold, with a central diamond of 1.00 ct",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 9400,
    popularity: 5,
    Description:
      "Especificar BIEN el contenido que tengamos acá!",
  },
  {
    name: "descripcion",
    picture: [
      "colocar imagen 1",
      "colocar imagen2",
    ],
    price: 15000,
    popularity: 4,
    Description:
    "Especificar BIEN el contenido que tengamos acá!"  },
];
//We go through the arrangement
products.forEach(function (product) {
  //call a row
  let row = document.getElementById("row");

  //Creating a div where JV
  let column = document.createElement("div");
  column.classList.add("col", "mt-5");

  //Creating a card
  let card = document.createElement("div");
  card.classList.add("card", "text-center", "h-100", "w-100");

  //Creating a picture
  let picture = document.createElement("img");
  picture.classList.add("img-fluid", "w-100");
  picture.src = product.picture[0];

  //detectamos the event
  picture.addEventListener("mouseover", function () {
    picture.src = product.picture[1];
  });
  picture.addEventListener("mouseleave", function () {
    picture.src = product.picture[0];
  });

  //the image of expand info is changed
  picture.addEventListener("click", function () {
    picture.src = product.picture[0];
  });
  //Creating a name
  let name = document.createElement("h3");
  name.classList.add("fw-bold", "text-center");
  name.textContent = product.name;

  //Creating the prices
  let price = document.createElement("h4");
  price.classList.add("fw-bold", "text-center");
  price.textContent = "US$ " + product.price;

  // Creating a popularity
  let popularity = document.createElement("h2");
  popularity.classList.add("d-none");
  popularity.textContent = product.popularity;

  //Creating a stars
  let contendorstars = document.createElement("div");
  for (let i = 1; i <= product.popularity; i++) {
    let stars = document.createElement("i");
    stars.classList.add("bi", "bi-star-fill", "text-warning");
    contendorstars.appendChild(stars);
  }

  //Creating a Description
  let Description = document.createElement("h5");
  Description.classList.add("text-black-50", "d-none");
  Description.textContent = product.Description;

  card.appendChild(picture);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(popularity);
  card.appendChild(contendorstars);
  card.appendChild(Description);
  column.appendChild(card);
  row.appendChild(column);
});
