
// preventDefault();
const animatesidebar = (() => {
  var flag = false;
  return function () {
    var sidebar = document.querySelector(".sidebar");
    var headtext = document.querySelector(".headtext");
    var data = document.querySelectorAll(".data");
    var hr = document.querySelectorAll(".rounded");
    if (flag == false) {
      sidebar.style.width = "100px";
      headtext.style.display = "none";
      data.forEach((element) => {
        element.style.display = "none";
      });
      hr.forEach((elements) => {
        elements.style.width = "80px";
      });
      flag = true;
    } else {
      sidebar.style.width = "300px";
      headtext.style.display = "flex";
      data.forEach((element) => {
        element.style.display = "flex";
      });
      hr.forEach((elements) => {
        elements.style.width = "250px";
      });
      flag = false;
    }
  };
})();
const selectTransportation = (selectedValue) => {
  console.log("Selected value:", selectedValue);
  var flight = document.querySelector(".flight");
  var bus = document.querySelector(".bus");
  var train = document.querySelector(".train");
  var car = document.querySelector(".car");
  if (selectedValue == "flight") {
    flight.style.display = "flex";
    bus.style.display = "none";
    train.style.display = "none";
    car.style.display = "none";
  } else if (selectedValue == "bus") {
    flight.style.display = "none";
    bus.style.display = "flex";
    train.style.display = "none";
    car.style.display = "none";
  } else if (selectedValue == "train") {
    bus.style.display = "none";
    flight.style.display = "none";
    train.style.display = "flex";
    car.style.display = "none";
  } else if (selectedValue == "car") {
    bus.style.display = "none";
    flight.style.display = "none";
    train.style.display = "none";
    car.style.display = "flex";
  }
};
var count = 0;
const state = () => {
  var voyage = document.querySelector("#voyage");
  var lodgeing = document.querySelector("#lodgeing");
  var calculation = document.querySelector("#calculation");
  var headtext1 = document.querySelector(".headtext1");
  var headtext2 = document.querySelector(".headtext2");
  var headtext4 = document.querySelector(".headtext4");
  if (count === 0) {
    voyage.style.display = "none";
    lodgeing.style.display = "flex";
    headtext1.style.backgroundColor = "#dbe7c9";
    headtext2.style.backgroundColor = "#c7e39e";
  } else if (count === 1) {
    calculation.style.display = "flex";
    lodgeing.style.display = "none";
    headtext2.style.backgroundColor = "#dbe7c9";
    headtext4.style.backgroundColor = "#c7e39e";
  }
  count++;
};

function sidebarstate(id) {
  console.log(id);
  var t = document.querySelector(".navlink");
  var u = document.getElementById("inclusive-container");
  var v = document.getElementById("lodge-container");
  var w = document.getElementById("car-container");
  var x = document.getElementById("flight-container");
  var y = document.getElementById("bus-container");
  var z = document.getElementById("train-container");

  if (id === "inclusive") {
    u.style.display = "flex";
    v.style.display = "none";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
  } else if (id === "lodge") {
    t.style.visibility = "hidden";
    u.style.display = "none";
    v.style.display = "flex";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
  } else if (id === "car") {
    t.style.display = "none"; 
    u.style.display = "none";
    v.style.display = "none";
    w.style.display = "flex";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
  } else if (id === "flight") {
    u.style.display = "none";
    t.style.display = "none"; 
    v.style.display = "none";
    w.style.display = "none";
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  } else if (id === "bus") {
    t.style.display = "none"; 
    u.style.display = "none";
    v.style.display = "none";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "none";
  } else if (id === "train") {
    t.style.display = "none"; 
    u.style.display = "none";
    v.style.display = "none";
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
  }
}


// select box work
document.addEventListener("DOMContentLoaded", function () {
  const flights = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Atlanta",
    "San Francisco",
    "Miami",
    "Dallas",
    "Seattle",
    "Denver",
    "Las Vegas",
    "Orlando",
    "Boston",
    "Washington D.C.",
    "London",
    "Paris",
    "Tokyo",
    "Hong Kong",
    "Dubai",
    "Frankfurt",
    "Singapore",
    "Sydney",
    "Toronto",
    "Vancouver",
    "Amsterdam",
    "Madrid",
    "Rome",
    "Beijing",
    "Shanghai",
    "Moscow",
    "Istanbul",
    "Bangkok",
    "Seoul",
    "Mexico City",
    "Sao Paulo",
    "Buenos Aires",
    "Johannesburg",
    "Cairo",
    "Mumbai",
    "Delhi",
    "Bangkok",
    "Kuala Lumpur",
    "Jakarta",
    "Lima",
    "Rio de Janeiro",
    "Cape Town",
    "Melbourne",
    "Auckland",
    "Honolulu",
  ];
  const routesToAirlines = {
    "New York-London": {
      "British Airways": { fare: 500, timing: ["9:00 AM", "11:00 AM"] },
      "American Airlines": { fare: 550, timing: ["10:30 AM", "11:30 AM"] },
      "Virgin Atlantic": { fare: 520, timing: ["11:45 AM"] },
    },
  };
  const selectFrom = document.querySelector("#selectfrom");
  const selectTo = document.querySelector("#selectto");
  const selectAirline = document.querySelector("#selectairline");
  const selectTiming = document.querySelector("#flight-time");
  const fareInfo = document.querySelector("#fare-info");
  const fare = document.querySelector("#fare");
  let originalFare = 0;
function populateSelectBox(selectBox, options, excludeValue = null) {
    while (selectBox.options.length > 1) {
      selectBox.remove(1);
    }
    options.forEach((option) => {
      if (option !== excludeValue) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectBox.appendChild(optionElement);
      }
    });
  }
function updateAirlineList() {
    const selectedFrom = selectFrom.value;
    const selectedTo = selectTo.value;
    const route = `${selectedFrom}-${selectedTo}`;
    const airlines = routesToAirlines[route]
      ? Object.keys(routesToAirlines[route])
      : [];
    if (airlines.length > 0) {
      populateSelectBox(selectAirline, [...airlines]);
    } else {
      populateSelectBox(selectAirline, ["No airline available"]);
    }
  }
function updateTimingList() {
    const selectedFrom = selectFrom.value;
    const selectedTo = selectTo.value;
    const selectedAirline = selectAirline.value;
    const route = `${selectedFrom}-${selectedTo}`;
    if (routesToAirlines[route] && routesToAirlines[route][selectedAirline]) {
      const fareValue = routesToAirlines[route][selectedAirline].fare;
      originalFare = parseInt(fareValue);
      fare.textContent = fareValue;
      const timings = routesToAirlines[route][selectedAirline].timing;
      populateSelectBox(selectTiming, [...timings]);
    } else {
      populateSelectBox(selectTiming);
      fare.textContent = "N/A";
    }
  }
    function updateOptions() {
    const selectedFrom = selectFrom.value;
    const selectedTo = selectTo.value;
    populateSelectBox(selectTo, flights, selectedFrom);
    selectFrom.value = selectedFrom;
    selectTo.value = selectedTo;
    updateAirlineList();
    populateSelectBox(selectTiming, ["Select timing"]);
    fare.textContent = "N/A";
  }
  selectFrom.addEventListener("change", updateOptions);
  selectTo.addEventListener("change", updateOptions);
  selectAirline.addEventListener("change", updateTimingList);
  populateSelectBox(selectFrom, flights);
  populateSelectBox(selectTo, flights);
  function updateFare() {
    const numSeats = parseInt(document.getElementById("seats").value);
    const totalFare = originalFare * numSeats;
    fare.textContent = `${totalFare}`;
  }
  document.getElementById("seats").addEventListener("input", updateFare);
});

 function TEST(params) {
   console.log('hello btn');
 }