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
