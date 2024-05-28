
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
  var u = document.querySelector(".mainbody");
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

let originalFare = 0;
document.addEventListener("DOMContentLoaded", function () {
  const flights = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Atlanta",
    "San Francisco", "Miami", "Dallas", "Seattle", "Denver", "Las Vegas",
    "Orlando", "Boston", "Washington D.C.", "London", "Paris", "Tokyo",
    "Hong Kong", "Dubai", "Frankfurt", "Singapore", "Sydney", "Toronto",
    "Vancouver", "Amsterdam", "Madrid", "Rome", "Beijing", "Shanghai",
    "Moscow", "Istanbul", "Bangkok", "Seoul", "Mexico City", "Sao Paulo",
    "Buenos Aires", "Johannesburg", "Cairo", "Mumbai", "Delhi", "Bangkok",
    "Kuala Lumpur", "Jakarta", "Lima", "Rio de Janeiro", "Cape Town",
    "Melbourne", "Auckland", "Honolulu",
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
  const fare = document.querySelector("#fare");
  const fares = document.querySelector(".fares");
  const farebill = document.querySelector(".farebill")
  

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
    const airlines = routesToAirlines[route] ? Object.keys(routesToAirlines[route]) : [];
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

  function updateFare() {
    const numSeats = parseInt(document.getElementById("seats").value);
    const totalFare = originalFare * numSeats;
    fare.textContent = `${totalFare}`;
    localStorage.setItem("totalFare", totalFare); 
  }

  function loadSavedFare() {
    const savedFare = localStorage.getItem("totalFare");
    if (savedFare !== null) {
      fares.textContent = savedFare;
      farebill.textContent = savedFare;
    }
  }

  selectFrom.addEventListener("change", updateOptions);
  selectTo.addEventListener("change", updateOptions);
  selectAirline.addEventListener("change", updateTimingList);
  document.getElementById("seats").addEventListener("input", updateFare);

  populateSelectBox(selectFrom, flights);
  populateSelectBox(selectTo, flights);
  
  loadSavedFare();
});


document.addEventListener("DOMContentLoaded", function () {
  const stations = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Atlanta",
    "San Francisco", "Miami", "Dallas", "Seattle", "Denver", "Las Vegas",
    "Orlando", "Boston", "Washington D.C.", "London", "Paris", "Tokyo",
    "Hong Kong", "Dubai", "Frankfurt", "Singapore", "Sydney", "Toronto",
    "Vancouver", "Amsterdam", "Madrid", "Rome", "Beijing", "Shanghai",
    "Moscow", "Istanbul", "Bangkok", "Seoul", "Mexico City", "Sao Paulo",
    "Buenos Aires", "Johannesburg", "Cairo", "Mumbai", "Delhi", "Bangkok",
    "Kuala Lumpur", "Jakarta", "Lima", "Rio de Janeiro", "Cape Town",
    "Melbourne", "Auckland", "Honolulu",
  ];

  const routesToTrains = {
    "New York-Chicago": {
      "Eurostar": { fare: 300, timing: ["8:00 AM", "10:00 AM"] },
      "Amtrak": { fare: 350, timing: ["9:00 AM", "11:00 AM"] },
      "Virgin Trains": { fare: 400, timing: ["11:00 AM"] },
    },
    "London-Paris": {
      "Vogtlandbahn": { fare: 200, timing: ["7:00 AM", "7:30 AM"] },
      "Flixtrain": { fare: 300, timing: ["8:00 AM", "8:30 AM"] },
      "Tågkompaniet AB": { fare: 450, timing: ["10:00 AM"] },
    },
    "Houston-Miami": {
      "Canfranero": { fare: 400, timing: ["10:00 AM", "12:30 AM"] },
      "Yerevan": { fare: 500, timing: ["12:30 AM", "3:00 AM"] },
      "Dnipro": { fare: 600, timing: ["03:00 AM"] },
    },
    "Miami-Dallas": {
      "Amtrak": { fare: 500, timing: ["8:30 AM", "11:30 AM"] },
      "Virgin Trains": { fare: 600, timing: ["12:30 AM", "1:30 AM"] },
      "Dnipro": { fare: 700, timing: ["01:30 AM"] },
    },
    "Moscow-Istanbul": {
      "Amtrak": { fare: 800, timing: ["9:30 AM", "10:30 AM"] },
      "Virgin Trains": { fare: 900, timing: ["10:30 AM", "11:30 AM"] },
      "Dnipro": { fare: 1000, timing: ["11:30 AM"] },
    },
    "Istanbul-Melbourne": {
      "FS Cargo": { fare: 400, timing: ["11:30 AM", "01:00 AM"] },
      "Kharkiv": { fare: 500, timing: ["01:00 AM", "02:30 AM"] },
      "Banverket": { fare: 800, timing: ["02:30 AM"] },
    },
    "Vancouver-New York": {
      "Eurostar": { fare: 700, timing: ["7:30 AM", "9:30 AM"] },
      "Bulgaria": { fare: 800, timing: ["9:30 AM", "11:30 AM"] },
      "Rhealys": { fare: 900, timing: ["11:30 AM"] },
    },
    "Madrid-Amsterdam": {
      "Kyiv": { fare: 500, timing: ["7:00 AM", "8:00 AM"] },
      "MÁV Cargo": { fare: 800, timing: ["9:00 AM", "10:00 AM"] },
      "Rofersped": { fare: 900, timing: ["10:00 AM"] },
    },
    "Toronto-Boston": {
      "Dnipro": { fare: 400, timing: ["8:30 AM", "10:00 AM"] },
      "Canfranero": { fare: 650, timing: ["10:00 AM", "11:30 AM"] },
      "Amtrak": { fare: 800, timing: ["11:30 AM"] },
    },
    "San Francisco-Frankfurt": {
      "DCRail": { fare: 800, timing: ["11:00 AM", "1:00 AM"] },
      "ScotRail": { fare: 1000, timing: ["1:00 AM", "3:00 AM"] },
      "Vintage": { fare: 1200, timing: ["3:00 AM"] },
    },



  };

  const selectFrom = document.querySelector("#selectfromtrain");
  const selectTo = document.querySelector("#selecttotrain");
  const selectTrain = document.querySelector("#selecttrain");
  const selectTiming = document.querySelector("#train-time");
  const fare = document.querySelector("#fare");

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

  function updateTrainList() {
    const selectedFrom = selectFrom.value;
    const selectedTo = selectTo.value;
    const route = `${selectedFrom}-${selectedTo}`;
    const trains = routesToTrains[route] ? Object.keys(routesToTrains[route]) : [];
    if (trains.length > 0) {
      populateSelectBox(selectTrain, [...trains]);
    } else {
      populateSelectBox(selectTrain, ["No train available"]);
    }
  }

  function updateTimingList() {
    const selectedFrom = selectFrom.value;
    const selectedTo = selectTo.value;
    const selectedTrain = selectTrain.value; // Corrected variable name
    const route = `${selectedFrom}-${selectedTo}`;
    if (routesToTrains[route] && routesToTrains[route][selectedTrain]) {
      const fareValue = routesToTrains[route][selectedTrain].fare;
      originalFare = parseInt(fareValue);
      console.log("Original Fare:", originalFare); // Log originalFare value
      fare.textContent = fareValue;
      const timings = routesToTrains[route][selectedTrain].timing;
      populateSelectBox(selectTiming, [...timings]);
    } else {
      populateSelectBox(selectTiming);
      fare.textContent = "N/A";
    }
  }

  function updateOptions() {
    const selectedFrom = selectFrom.value;
    const selectedTo = selectTo.value;
    populateSelectBox(selectTo, stations, selectedFrom);
    selectFrom.value = selectedFrom;
    selectTo.value = selectedTo;
    updateTrainList();
    populateSelectBox(selectTiming, ["Select timing"]);
    fare.textContent = "N/A";
  }

  function updateFare() {
    const numSeats = parseInt(document.getElementById("trainseats").value);
    console.log("Number of Seats:", numSeats); 
    const totalFare = originalFare * numSeats;
    fare.textContent = `$${totalFare}`;
  }

  

  selectFrom.addEventListener("change", updateOptions);
  selectTo.addEventListener("change", updateOptions);
  selectTrain.addEventListener("change", updateTimingList);
  document.getElementById("trainseats").addEventListener("input", updateFare);

  populateSelectBox(selectFrom, stations);
  populateSelectBox(selectTo, stations);

  
});

document.addEventListener("DOMContentLoaded", function () {
  const stations = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Atlanta",
    "San Francisco", "Miami", "Dallas", "Seattle", "Denver", "Las Vegas",
    "Orlando", "Boston", "Washington D.C.", "London", "Paris", "Tokyo",
    "Hong Kong", "Dubai", "Frankfurt", "Singapore", "Sydney", "Toronto",
    "Vancouver", "Amsterdam", "Madrid", "Rome", "Beijing", "Shanghai",
    "Moscow", "Istanbul", "Bangkok", "Seoul", "Mexico City", "Sao Paulo",
    "Buenos Aires", "Johannesburg", "Cairo", "Mumbai", "Delhi", "Bangkok",
    "Kuala Lumpur", "Jakarta", "Lima", "Rio de Janeiro", "Cape Town",
    "Melbourne", "Auckland", "Honolulu",
  ];

  const routesToBuses = {
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "Los Angeles-Chicago": {
      "National Express": {fare: 200, timing: ["10:00 AM", "3:00 PM"] },
      "ALSA": { fare: 300, timing: ["4:00 AM", "5:30 PM"] },
      "Eurolines.": { fare: 400, timing: ["6:00 AM", "8:00 PM"] },
    },
    "Johannesburg-LosAngeles": {
      "Terravision": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Marozzi": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "ALSA": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },
    "New York-Los Angeles": {
      "Greyhound": { fare: 150, timing: ["7:00 AM", "5:00 PM"] },
      "Megabus": { fare: 130, timing: ["8:30 AM", "6:30 PM"] },
      "FlixBus": { fare: 140, timing: ["9:00 AM", "7:00 PM"] },
    },





  };

  const selectFromBus = document.querySelector("#selectfrombus");
  const selectToBus = document.querySelector("#selecttobus");
  const selectBus = document.querySelector("#busname");
  const selectBusTiming = document.querySelector("#bustime");
  const busFare = document.querySelector("#fare");

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

  function updateBusList() {
    const selectedFrom = selectFromBus.value;
    const selectedTo = selectToBus.value;
    const route = `${selectedFrom}-${selectedTo}`;
    const buses = routesToBuses[route] ? Object.keys(routesToBuses[route]) : [];
    if (buses.length > 0) {
      populateSelectBox(selectBus, [...buses]);
    } else {
      populateSelectBox(selectBus, ["No bus available"]);
    }
  }

  function updateBusTimingList() {
    const selectedFrom = selectFromBus.value;
    const selectedTo = selectToBus.value;
    const selectedBus = selectBus.value;
    const route = `${selectedFrom}-${selectedTo}`;
    if (routesToBuses[route] && routesToBuses[route][selectedBus]) {
      const fareValue = routesToBuses[route][selectedBus].fare;
      originalFare = parseInt(fareValue);
      console.log("Bus Original Fare:", originalFare);
      busFare.textContent = fareValue;
      const timings = routesToBuses[route][selectedBus].timing;
      populateSelectBox(selectBusTiming, [...timings]);
    } else {
      populateSelectBox(selectBusTiming);
      busFare.textContent = "N/A";
    }
  }

  function updateBusOptions() {
    const selectedFrom = selectFromBus.value;
    const selectedTo = selectToBus.value;
    populateSelectBox(selectToBus, stations, selectedFrom);
    selectFromBus.value = selectedFrom;
    selectToBus.value = selectedTo;
    updateBusList();
    populateSelectBox(selectBusTiming, ["Select timing"]);
    busFare.textContent = "N/A";
  }

  function updateFare() {
    const numSeats = parseInt(document.getElementById("busseats").value);
    console.log("Number of Bus Seats:", numSeats);
    if (isNaN(numSeats) || numSeats <= 0) {
      busFare.textContent = "N/A";
      return;
    }
    const totalBusFare = originalFare * numSeats;
    console.log("Total Bus Fare:", totalBusFare);
    busFare.textContent = `$${totalBusFare}`;
  }

  selectFromBus.addEventListener("change", updateBusOptions);
  selectToBus.addEventListener("change", updateBusOptions);
  selectBus.addEventListener("change", updateBusTimingList);
  document.getElementById("busseats").addEventListener("input", updateFare);

  populateSelectBox(selectFromBus, stations);
  populateSelectBox(selectToBus, stations);
});

document.addEventListener("DOMContentLoaded", function () {
  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Atlanta",
    "San Francisco", "Miami", "Dallas", "Seattle", "Denver", "Las Vegas",
    "Orlando", "Boston", "Washington D.C.", "London", "Paris", "Tokyo",
    "Hong Kong", "Dubai", "Frankfurt", "Singapore", "Sydney", "Toronto",
    "Vancouver", "Amsterdam", "Madrid", "Rome", "Beijing", "Shanghai",
    "Moscow", "Istanbul", "Bangkok", "Seoul", "Mexico City", "Sao Paulo",
    "Buenos Aires", "Johannesburg", "Cairo", "Mumbai", "Delhi", "Kuala Lumpur",
    "Jakarta", "Lima", "Rio de Janeiro", "Cape Town", "Melbourne", "Auckland",
    "Honolulu",
  ];

  const cityToHotels = {
    "New York": {
      "Hilton": { fare: 250 },
      "Marriott": { fare: 220 },
      "Hyatt": { fare: 230 },
    },
    "Los Angeles": {
      "Hilton": { fare: 240 },
      "Marriott": { fare: 210 },
      "Hyatt": { fare: 220 },
    },
    // Add other cities and their respective hotels with fares
  };

  const selectCity = document.querySelector("#selectcity");
  const selectHotel = document.querySelector("#selecthotel");
  const inputRooms = document.querySelector("#seats");
  const inputPersons = document.querySelector("#Persons");
  const hotelFare = document.querySelector("#Rent");

  function populateSelectBox(selectBox, options) {
    while (selectBox.options.length > 1) {
      selectBox.remove(1);
    }
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      selectBox.appendChild(optionElement);
    });
  }

  function updateHotelList() {
    const selectedCity = selectCity.value;
    const hotels = cityToHotels[selectedCity] ? Object.keys(cityToHotels[selectedCity]) : [];
    if (hotels.length > 0) {
      populateSelectBox(selectHotel, [...hotels]);
    } else {
      populateSelectBox(selectHotel, ["No hotel available"]);
    }
  }

  function updateHotelFare() {
    const selectedCity = selectCity.value;
    const selectedHotel = selectHotel.value;
    const rooms = parseInt(inputRooms.value);
    const persons = parseInt(inputPersons.value);
    if (
      cityToHotels[selectedCity] &&
      cityToHotels[selectedCity][selectedHotel] &&
      !isNaN(rooms) &&
      rooms > 0 &&
      !isNaN(persons) &&
      persons > 0
    ) {
      const farePerRoom = cityToHotels[selectedCity][selectedHotel].fare;
      const totalFare = farePerRoom * rooms;
      hotelFare.textContent = `$${totalFare}`;
    } else {
      hotelFare.textContent = "N/A";
    }
  }
  selectCity.addEventListener("change", updateHotelList);
  selectHotel.addEventListener("change", updateHotelFare);
  inputRooms.addEventListener("input", updateHotelFare);
  inputPersons.addEventListener("input", updateHotelFare);

  populateSelectBox(selectCity, cities);
});
