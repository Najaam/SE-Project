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
    name: "Al Jaddaf Hotel",
    location: "UAE",
    city: "ABU DHABI",
    img: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    name: "Al Jaddaf Hotel",
    location: "UAE",
    city: "ABU DHABI",
    img: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    name: "Al Jaddaf Hotel",
    location: "UAE",
    city: "ABU DHABI",
    img: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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