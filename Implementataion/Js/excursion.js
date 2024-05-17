const animatesidebar = (() => {
    var flag = false; 
    return function() {
        var sidebar = document.querySelector(".sidebar");
        var headtext = document.querySelector(".headtext");
        var data = document.querySelectorAll(".data");
        var hr = document.querySelectorAll(".rounded");
        if(flag == false){
            sidebar.style.width = "100px";
            headtext.style.display = "none";
            data.forEach(element => {
                element.style.display = "none";
            });
            hr.forEach(elements => {
                elements.style.width = "80px";
            });
            flag = true;
        } else {
            sidebar.style.width = "300px";
            headtext.style.display = "flex";
            data.forEach(element => {
                element.style.display = "flex";
            });
            hr.forEach(elements => {
                elements.style.width = "250px";
            });
            flag = false;
        }
    };
})();

const selectTransportation = (selectedValue) => {
    console.log("Selected value:", selectedValue);
    var flight = document.querySelector(".flight");
    var bus = document.querySelector(".bus")
    var train = document.querySelector(".train")
    var car = document.querySelector(".car")
    if(selectedValue == "flight"){
        flight.style.display = "flex";
        bus.style.display = "none";
        train.style.display = "none";
        car.style.display = "none";
    }else if (selectedValue == "bus") {
        flight.style.display = "none";
        bus.style.display = "flex";
        train.style.display = "none";
        car.style.display = "none";
        
    }else if (selectedValue == "train") {
        bus.style.display = "none";
        flight.style.display = "none";
        train.style.display = "flex";
        car.style.display = "none";
        
    }else if (selectedValue == "car") {
        bus.style.display = "none";
        flight.style.display = "none";    
        train.style.display = "none";
        car.style.display = "flex";
    }
}


const state = (() => {
    var count = 0;
    return function (){
        var voyage = document.querySelector(".voyage");
        var lodging = document.querySelector(".lodging-arrangment");
        count++;
        console.log(count);
        if (count === 0) {
            
            voyage.style.display = "flex";
            lodging.style.display = "none";
    
        } else if(count === 1){
            voyage.style.display = "none";
            lodging.style.display = "flex";
    
        }

    }
})();