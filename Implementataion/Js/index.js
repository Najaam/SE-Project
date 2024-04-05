function setstate(id){
  var x = document.querySelector("#hotelContainer");
  var y = document.querySelector("#PlacesContainer");
  var z=document.querySelector("#ResturantsContainer");
  var w = document.querySelector("#RecommandationsContainer");
  if (id === "hotelContainer") {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
  }
  else if(id === "PlacesContainer"){
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
    w.style.display = "none";
  }
  else if(id === "ResturantsContainer"){
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
    w.style.display = "none";
  }
else if(id === "RecommandationsContainer"){
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  w.style.display = "flex";


}

  document.getElementById("Hotels").addEventListener("click", function() {
    setstate("hotelContainer");
  });
  
  document.getElementById("Places").addEventListener("click", function() {
    setstate("PlacesContainer");
  });
  document.getElementById("Resturants").addEventListener("click", function() {
    setstate("ResturantsContainer");
  });

  document.getElementById("Recommand").addEventListener("click", function() {
    setstate("RecommandationsContainer");
  });


  }




// Check if all images in the slideshow are loaded
function allSlidesLoaded(slides, callback) {

  var loadedImages = 0;
  slides.forEach(function(slide) {
      var image = slide.querySelector("img");
      if (image.complete) {
          loadedImages++;
      }
  });
  if (loadedImages === slides.length) {
      callback();
  }
}

// Function to show or hide the loader
function toggleLoader(show) {
  var loader = document.querySelector(".loader");
  if (show) {
      loader.style.display = "block";
  } else {
      loader.style.display = "none";
  }
}


function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var slideIndex = 0;

  
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Display one slide at a time
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  // Call showSlides function recursively after 4 seconds
  setTimeout(showSlides, 4000);
}

showSlides();

var slides = document.querySelectorAll(".mySlides");


allSlidesLoaded(slides, function() {
  toggleLoader(false); 
});

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
          <img src="${hotel.img}" alt="${hotel.name}">
          <div class="card-text">
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

var Places = [
  {
    name: "Mehran Hotel",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
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
    name: "Mehran Resturant",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Book Now",
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
    name: "Mehran Recommandations",
    location: "Pakistan",
    city: "Karachi",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      Recommandations.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
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