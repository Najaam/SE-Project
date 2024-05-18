function toExcursion(){
  window.location.href = "../Pages/excursion.html";
}
function toContact(){
  window.location.href = "../Pages/contact.html";
}


function setstate(id) {
  var a = document.querySelector("#CurrencyConverter");
  var b = document.querySelector(".searchbar");
  var c = document.querySelector("#TransportationContainer");
  var w = document.querySelector("#RecommandationsContainer");
  var x = document.querySelector("#hotelContainer");
  var y = document.querySelector("#PlacesContainer");
  var z = document.querySelector("#ResturantsContainer");
  if (id === "hotelContainer") {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
    a.style.display = "none";
    b.style.display = "flex";

    c.style.display = "none";
  } else if (id === "PlacesContainer") {
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
    w.style.display = "none";
    a.style.display = "none";
    b.style.display = "flex";

    c.style.display = "none";
  } else if (id === "ResturantsContainer") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
    w.style.display = "none";
    a.style.display = "none";
    b.style.display = "flex";

    c.style.display = "none";
  } else if (id === "RecommandationsContainer") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    w.style.display = "flex";
    a.style.display = "none";
    b.style.display = "flex";

    c.style.display = "none";
  } else if (id === "CurrencyConverter") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
  } else if (id === "TransportationContainer") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
    a.style.display = "none";
    b.style.display = "flex";
    c.style.display = "flex";
  }

  document.getElementById("Hotels").addEventListener("click", function () {
    setstate("hotelContainer");
  });

  document.getElementById("Places").addEventListener("click", function () {
    setstate("PlacesContainer");
  });
  document.getElementById("Resturants").addEventListener("click", function () {
    setstate("ResturantsContainer");
  });

  document.getElementById("Recommand").addEventListener("click", function () {
    setstate("RecommandationsContainer");
  });
  document.getElementById("Transport").addEventListener("click", function () {
    setstate("TransportationContainer");
  });
}

// // slideshow animation
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex - 1].style.display = "block";
// }
// setInterval(function () {
//   plusSlides(1);
// }, 4000);
var hotels = [
  {
    name: "Mehran Hotel",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ramada Hotel",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Country Club",
    location: "Maldives",
    city: "Malé",
    img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Butique Hotel",
    city: "Paris",
    location: "France",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Melia La Defense",
    location: "Spain",
    city: "Madrid",
    img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: "Volga Rika Hotel",
    location: "Turkey",
    city: "Istanbul",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Sehzade Hotel",
    location: "Turkey",
    city: "Ankara",
    img: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "OKKO Hotel",
    location: "France",
    city: "Paris",
    img: "https://images.unsplash.com/photo-1625244695851-1fc873f942bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Park Hyatt Hotel",
    location: "USA",
    city: "New York",
    img: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: "Moca Hotel",
    location: "USA",
    city: "Miami",
    img: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: " Oriental Hotel",
    location: "Srilanka",
    city: "Colombo",
    img: "https://images.unsplash.com/photo-1590912550138-e79ac2c5b8e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "MRA Grand Hotel",
    location: "UAE",
    city: "Dubai",
    img: "https://images.unsplash.com/photo-1562809896-1b1514f40708?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: "Al Jaddaf Hotel",
    location: "UAE",
    city: "ABU DHABI",
    img: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "SKYE Hotel",
    location: "Australia",
    city: "Sydney",
    img: "https://images.unsplash.com/photo-1613769073681-3a87c3d97858?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Kimpton Hotel",
    location: "Australia",
    city: "Melbourne",
    img: "https://images.unsplash.com/photo-1654503368897-6a232b3f7c6c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ivory Inn Hotel",
    location: "Qatar",
    city: "Doha",
    img: "https://plus.unsplash.com/premium_photo-1661962992065-ce02d11c1d28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ezdan Hotel",
    location: "Qatar",
    city: "Al Zubarah",
    img: "https://images.unsplash.com/photo-1709205565032-84db34ca294f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Green Tree Hotel",
    location: "china",
    city: "Beijing",
    img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: "Joy Fall Hotel",
    location: "china",
    city: "Shanghai",
    img: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ma Maison",
    location: "Italy",
    city: "Rome",
    img: "https://images.unsplash.com/photo-1554647286-f365d7defc2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Sun suite Hotel",
    location: "Italy",
    city: "Milan",
    img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "City Box Hotel",
    location: "Norway",
    city: "Oslo",
    img: "https://images.unsplash.com/photo-1554009975-d74653b879f1?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Brienzersee Hotel",
    location: "Switzerland",
    city: "Zermatt",
    img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Residence Hotel",
    location: "Switzerland",
    city: "Grindelwald",
    img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
];

function createHotelCards(hotels) {
  var container = document.getElementById("hotelContainer");
  container.innerHTML = "";
  hotels.forEach(function (hotel) {
    var card = document.createElement("div");
    card.classList.add("card");
    var cardContent = `
          <img src="${hotel.img}" alt="${hotel.name}" loading="lazy">
          <div class="card-text" loading="lazy">
              <h2>${hotel.name}</h2>
              <p>${hotel.location}</p>
              <p class="city">${hotel.city}</p>
              <button>${hotel.button}</button>
          </div>
      `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

function filterHotels(searchTerm) {
  var filteredHotels = hotels.filter(function (hotel) {
    return (
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  createHotelCards(filteredHotels);
}

document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    var searchTerm = event.target.value.trim();
    filterHotels(searchTerm);
  });

createHotelCards(hotels);

function login_btn() {
  window.location.href = "../Pages/Authform.html";
}


function profile() {
  window.location.href = "../Pages/Profilepage.html";
}




var Places = [
  {
    name: "Manora Beach",
    location: "Pakistan",
    city: "Karachi",
    img: "https://plus.unsplash.com/premium_photo-1669018130044-1a5c168d20ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },


  {
    name: "Taj Mahal",
    location: "India",
    city: "Agra",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },

  {
    name: "Badshahi Mosque",
    location: "Pakistan",
    city: "Lahore",
    img: "https://images.unsplash.com/photo-1702434428628-4c8a191c532a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Galata Tower",
    location: "Türkiye",
    city: "Istanbul",
    img: "https://plus.unsplash.com/premium_photo-1661963799399-ffd4f9ac14c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Glacier Park",
    location: "USA",
    city: "Montana",
    img: "https://images.unsplash.com/photo-1521405785232-7a56b029191e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Buckingham",
    location: "England",
    city: "London",
    img: "https://images.unsplash.com/photo-1556821862-33ec0be5c2c0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Branden Gate",
    location: "Germany",
    city: "Berlin",
    img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Colosseum",
    location: "Italy",
    city: "Rome",
    img: "https://plus.unsplash.com/premium_photo-1676037249901-07b05f763638?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Trevi Fountain",
    location: "Italy",
    city: "Rome",
    img: "https://plus.unsplash.com/premium_photo-1676391399745-b08a99a19b51?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    city: "Alp Region",
    img: "https://images.unsplash.com/photo-1586752488885-6ce47fdfd874?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },

  {
    name: "Maui",
    location: "Hawai",
    city: "Maui County",
    img: "https://images.unsplash.com/photo-1491597779497-038f35d6beb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",
  },
  {
    name: "Phuket Island",
    location: "Thailand",
    city: "Phuket",
    img: "https://images.unsplash.com/photo-1551418843-01c6b62e864d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",
  },

  {
    name: "McWay Falls",
    location: "Costa Rica",
    city: "Costa Rica",
    img: "https://plus.unsplash.com/premium_photo-1667796404400-fe596bc6cd86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",
  },

  {
    name: "Papeete",
    location: "Polynesia",
    city: "Tahiti",
    img: "https://images.unsplash.com/photo-1600265813453-d099f55d8b01?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },

  {
    name: "City Scape",
    location: "Australia",
    city: "Sydney",
    img: "https://plus.unsplash.com/premium_photo-1697730198238-48ee2f2fe1b7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",


  },
  {
    name: "Serene",
    location: "Indonessia",
    city: "Bali",
    img: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",


  },





  


];
function createPlacesCards(Places) {
  var container = document.getElementById("PlacesContainer");
  container.innerHTML = "";
  Places.forEach(function (Places) {
    var card = document.createElement("div");
    card.classList.add("card");
    var cardContent = `
          <img src="${Places.img}" alt="${Places.name}">
          <div class="card-text">
              <h2>${Places.name}</h2>
              <p>${Places.location}</p>
              <p class="city">${Places.city}</p>
              <button>${Places.button}</button>
          </div>
      `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

function filterPlaces(searchTerm) {
  var filteredPlaces = Places.filter(function (Places) {
    return (
      Places.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Places.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Places.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  createPlacesCards(filteredPlaces);
}

document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    var searchTerm = event.target.value.trim();
    filterPlaces(searchTerm);
  });

createPlacesCards(Places);

var Resturants = [
  {
    name: "Kolachi Resturant",
    location: "Pakistan",
    city: "Karachi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5XnrLnxv3_eIXejirlHMVfMN0Pzor1QMV8NV7a9uHA&s",
    button: "View Info",

  },


  {
    name: "Monal Resturant",
    location: "Pakistan",
    city: "Islamabad",
    img: "https://images.unsplash.com/photo-1640687997745-11fd29b470a5?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },

  {
    name: "Hanza Resturant",
    location: "Türkiye",
    city: "Istanbul",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDM0WI40JCfUGTr-W0G7gB7hKw-akaz5ziCPPNDuMvA&s",
    button: "View Info",

  },
  {
    name: "Asador Etxebarri",
    location: "Spain",
    city: "San Juan",
    img: "https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Asador-Etxebarri-interior.jpg",
    button: "View Info",

  },
  {
    name: "Atomix",
    location: "USA",
    city: "New York",
    img: "https://image.architonic.com/prj2-3/20079490/boconcept-projects-atomix-restaurant-new-york-01-credit-diane-kang-arcit18.jpg",
    button: "View Info",

  },
  {
    name: "Odette",
    location: "Malaysia",
    city: "Kuala Lumpur",
    img: "https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Odette-interior.jpg",
    button: "View Info",

  },
  {
    name: "Steirereck",
    location: "Germany",
    city: "Stadtpark",
    img: "https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Steirereck-interior.jpg",
    button: "View Info",

  },
  {
    name: "Uliassi",
    location: "Italy",
    city: "Senigallia",
    img: "https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Uliassi-interior.jpg",
    button: "View Info",

  },
  {
    name: "Piazza Duomo",
    location: "Milan",
    city: "Centro Storico",
    img: "https://www.theworlds50best.com/filestore/jpg/W50BR23-1-50-List-Piazza-Duomo-interior.jpg",
    button: "View Info",

  },

  {
    name: "Maido",
    location: "Peru",
    city: "Lima",
    img: "https://www.theworlds50best.com/filestore/jpg/W50BR22-Maido-Interior.jpg",
    button: "View Info",

  },
  {
    name: "Don Julio",
    location: "Argentina",
    city: "Buenos Aires",
    img: "https://cdn.tasteatlas.com/images/restaurants/504c7d319f7b45559fda0b7b5778141e.jpg?m=facebook",
    button: "View Info",

  },
  {
    name: "Leo",
    location: "Colombia",
    city: "Bogotá",
    img: "https://restauranteleo.com/wp-content/uploads/2023/10/sala-laura.jpg",
    button: "View Info",

  },
  {
    name: "Florilège ",
    location: "Japan",
    city: "Tokyo",
    img: "https://media.cntraveler.com/photos/5a930fb9723a834885e153c5/16:9/w_2560,c_limit/Florilege__2018_interior.jpg",
    button: "View Info",

  },
  {
    name: "Belcanto",
    location: "Portugal",
    city: "Lisbon",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/a3/09/00/dining-room.jpg",
    button: "View Info",

  },

  {
    name: "Quintonil",
    location: "Mexico",
    city: "Mexico city",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/24/7e/64/80/quintonil.jpg",
    button: "View Info",

  },

  {
    name: "A Casa do Porco ",
    location: "Brazil",
    city: "São Paulo",
    img: "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/04/a-casa-do-porco-ambiente-1.jpg?resize=640%2C471&ssl=1",
    button: "View Info",

  },

  





  


];
function createResturantsCards(Resturants) {
  var container = document.getElementById("ResturantsContainer");
  container.innerHTML = "";
  Resturants.forEach(function (Resturants) {
    var card = document.createElement("div");
    card.classList.add("card");
    var cardContent = `
          <img src="${Resturants.img}" alt="${Resturants.name}">
          <div class="card-text">
              <h2>${Resturants.name}</h2>
              <p>${Resturants.location}</p>
              <p class="city">${Resturants.city}</p>
              <button>${Resturants.button}</button>
          </div>
      `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

function filterResturants(searchTerm) {
  var filteredResturants = Resturants.filter(function (Resturants) {
    return (
      Resturants.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Resturants.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Resturants.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  createResturantsCards(filteredResturants);
}

document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    var searchTerm = event.target.value.trim();
    filterResturants(searchTerm);
  });

createResturantsCards(Resturants);

var Recommandations = [
  {
    name: "Mehran",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: "Don Julio",
    location: "Argentina",
    city: "Buenos Aires",
    img: "https://cdn.tasteatlas.com/images/restaurants/504c7d319f7b45559fda0b7b5778141e.jpg?m=facebook",
    button: "View Info",

  },
  {
    name: "Leo",
    location: "Colombia",
    city: "Bogotá",
    img: "https://restauranteleo.com/wp-content/uploads/2023/10/sala-laura.jpg",
    button: "View Info",

  },
  {
    name: "Florilège ",
    location: "Japan",
    city: "Tokyo",
    img: "https://media.cntraveler.com/photos/5a930fb9723a834885e153c5/16:9/w_2560,c_limit/Florilege__2018_interior.jpg",
    button: "View Info",

  },
  {
    name: "Belcanto",
    location: "Portugal",
    city: "Lisbon",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/a3/09/00/dining-room.jpg",
    button: "View Info",

  },

  {
    name: "Quintonil",
    location: "Mexico",
    city: "Mexico city",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/24/7e/64/80/quintonil.jpg",
    button: "View Info",

  },

  {
    name: "McWay Falls",
    location: "Costa Rica",
    city: "Costa Rica",
    img: "https://plus.unsplash.com/premium_photo-1667796404400-fe596bc6cd86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",
  },

  {
    name: "Papeete",
    location: "Polynesia",
    city: "Tahiti",
    img: "https://images.unsplash.com/photo-1600265813453-d099f55d8b01?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",

  },

  {
    name: "City Scape",
    location: "Australia",
    city: "Sydney",
    img: "https://plus.unsplash.com/premium_photo-1697730198238-48ee2f2fe1b7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",


  },
  {
    name: "Serene",
    location: "Indonessia",
    city: "Bali",
    img: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "View Info",


  },

  {
    name: "Ivory Inn Hotel",
    location: "Qatar",
    city: "Doha",
    img: "https://plus.unsplash.com/premium_photo-1661962992065-ce02d11c1d28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ezdan Hotel",
    location: "Qatar",
    city: "Al Zubarah",
    img: "https://images.unsplash.com/photo-1709205565032-84db34ca294f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Green Tree Hotel",
    location: "china",
    city: "Beijing",
    img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },

  {
    name: "Joy Fall Hotel",
    location: "china",
    city: "Shanghai",
    img: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ma Maison",
    location: "Italy",
    city: "Rome",
    img: "https://images.unsplash.com/photo-1554647286-f365d7defc2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Sun suite Hotel",
    location: "Italy",
    city: "Milan",
    img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "City Box Hotel",
    location: "Norway",
    city: "Oslo",
    img: "https://images.unsplash.com/photo-1554009975-d74653b879f1?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Brienzersee Hotel",
    location: "Switzerland",
    city: "Zermatt",
    img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Ramada Hotel",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },
  {
    name: "Country Club",
    location: "Maldives",
    city: "Malé",
    img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
  },







];
function createRecommandationsCards(Recommandations) {
  var container = document.getElementById("RecommandationsContainer");
  container.innerHTML = "";
  Recommandations.forEach(function (Recommandations) {
    var card = document.createElement("div");
    card.classList.add("card");
    var cardContent = `
          <img src="${Recommandations.img}" alt="${Recommandations.name}">
          <div class="card-text">
              <h2>${Recommandations.name}</h2>
              <p>${Recommandations.location}</p>
              <p class="city">${Recommandations.city}</p>
              <button>${Recommandations.button}</button>
          </div>
      `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

function filterRecommandations(searchTerm) {
  var filteredRecommandations = Resturants.filter(function (Recommandations) {
    return (
      Recommandations.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Recommandations.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      Recommandations.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  createRecommandationsCards(filteredRecommandations);
}

document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    var searchTerm = event.target.value.trim();
    filterRecommandations(searchTerm);
  });

createRecommandationsCards(Recommandations);

//curnncy converter
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((response) => response.json())
  .then((data) => {
    const currencies = Object.keys(data.rates);
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    currencies.forEach((currency,country) => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = currency;
      option1.textContent = currency;
      option2.value = currency;
      option2.textContent = currency;
      fromCurrencySelect.appendChild(option1);
      toCurrencySelect.appendChild(option2);
    });
  })
  .catch((error) => {
    console.error("Error fetching currency data:", error);
  });

// Function to convert currency
function convertCurrency() {
  const amount = document.getElementById("amountInput").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const resultElement = document.querySelector(".Result");

  // Fetch exchange rates from API
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = amount * exchangeRate;
      resultElement.style.display = "flex";
      resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
      resultElement.innerHTML = "Error fetching exchange rates";
    });
}

var Transportation = [
  {
    name: "Daewoo Bus",
    location: "Pakistan",
    city: "Karachi-Lahore-Islamabad-Peshawar",
    img: "https://thetravellino.com/wp-content/uploads/2023/12/Daewoo-Express-Lahore-Bus-Timings-Ticket-Price-And-Contact-Number.jpg",
    button: "Book Now",
  },

  {
    name: "Faisal Movers",
    location: "Pakistan",
    city: "Karachi-Lahore-Islamabad",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpizdoPgLS_IvVjz8RYi6-cYwmPs5awLZP2oPRgVD8dU2RJhQIqJgyQnh0v_4veGDhTw&usqp=CAU",
    button: "Book Now",
  },

  {
    name: "Niazi Express",
    location: "Pakistan",
    city: "Karachi-Lahore-Islamabad",
    img: "https://thetravellino.com/wp-content/uploads/2023/12/Daewoo-Express-Lahore-Bus-Timings-Ticket-Price-And-Contact-Number.jpg",
    button: "Book Now",
  },

  {
    name: "Flix Bus",
    location: "Neatherlands",
    city: "Amsterdam-Rotterdam-Hague",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQhzLN6a-C9IDLdqFke78bSHuyV-m8UOu4AwoB9BCdQ&s",
    button: "Book Now",
 
  },
  {
    name: "Qatar Airways",
    location: "Qatar",
    city: "Doha (DOH) - Hamburg (HAM)",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/52/1d/qatar-airways.jpg?w=1200&h=-1&s=1",
    button: "Book Now",
 
  },

  {
    name: "Thai Airways",
    location: "Thailand",
    city: "Suvarnabhumi  to Heathrow  (LHR)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29st8g0k08tqo4DtBrPVwWIUearN5RjyndKa9OmcaUw&s",
    button: "Book Now",
 
  },
  {
    name: "British Airways",
    location: "United Kingdom",
    city: "Costa del Sol · Orlando · Cancun",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/British_Airways_A380-800_F-WWSC_%281%29.jpg",
    button: "Book Now",
 
  },
  {
    name: "Breeze Airways",
    location: "USA",
    city: "New York-Providence-Pittsburgh",
    img: "https://www.travelandleisure.com/thmb/ABCCJDHQtxTjqB6zlKpXInbUZPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-breeze-airways-airplane-tampa-airport-BREEZESALE1122-7ba5136e21c242be9e6aede25867d3e6.jpg",
    button: "Book Now",
 
  },
  {
    name: "Inca Rail",
    location: "South America",
    city: "Machu Picchu",
    img: "https://media.cntraveler.com/photos/6536878bbd407caf1d7d382d/master/w_1920%2Cc_limit/Inca%2520Rail_South%2520America_Copia-de-DJI_0059-11%2520(1).jpeg",
    button: "Book Now",
 
  },
  {
    name: "Transcantabrico",
    location: "Spain",
    city: "San Sebastián",
    img: "https://media.cntraveler.com/photos/64ff64b66bfa6961a780823a/master/w_1920%2Cc_limit/Transcantabrico%2520Gran%2520Lujo%2C%2520Spain%2520%25C2%25A9%2520El%2520Tren%2520Transcanta%25CC%2581brico%2520_%2520luarca012.JPG",
    button: "Book Now",
 
  },
  {
    name: "The Canadian",
    location: "Canada",
    city: "Toronto",
    img: "https://media.cntraveler.com/photos/6328aa38a0d8d8085cf98291/master/w_1920%2Cc_limit/The%2520Canadian%2520Train_RS452_AF.jpg",
    button: "Book Now",
 
  },
  {
    name: "The Ghan",
    location: "Australia",
    city: "MacDonnell Ranges",
    img: "https://media.cntraveler.com/photos/5dd565a8dd4d7d00084581ed/master/w_1920%2Cc_limit/ghan-1.jpg",
    button: "Book Now",
 
  },







];

function createTransportationsCards(transportations) {
  var container = document.getElementById("TransportationContainer");
  container.innerHTML = "";
  transportations.forEach(function (transportation) {
    var card = document.createElement("div");
    card.classList.add("card");
    var cardContent = `
          <img src="${transportation.img}" alt="${transportation.name}">
          <div class="card-text">
              <h2>${transportation.name}</h2>
              <p>${transportation.location}</p>
              <p class="city">${transportation.city}</p>
              <button>${transportation.button}</button>
          </div>
      `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

function filterTransportation(searchTerm) {
  var filteredTransportations = Transportation.filter(function (transportation) {
    return (
      transportation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transportation.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transportation.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  createTransportationsCards(filteredTransportations);
}

document.getElementById("searchInput").addEventListener("input", function (event) {
  var searchTerm = event.target.value.trim();
  filterTransportation(searchTerm);
});
createTransportationsCards(Transportation);
document.addEventListener("DOMContentLoaded", function() {
  renderProfileOrButton();
});

function renderProfileOrButton() {
  var profileImage = document.getElementById("profileImage");
  var profileDiv = document.querySelector(".profile");
  var loginButton = document.querySelector(".btn");

  var userData = JSON.parse(localStorage.getItem("userData"));

  console.log(userData);

  if (userData) {
    var savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      profileImage.src = savedImage; 
    }
    profileDiv.style.display = "flex";
    loginButton.style.display = "none";
  } else {
    profileDiv.style.display = "none";
    loginButton.style.display = "flex";
  }
}

