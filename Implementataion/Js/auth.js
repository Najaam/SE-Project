function toggle(id) {
  var x = document.querySelector(".log-form");
  var y = document.querySelector(".reg-form");
  var a = document.querySelector(".logintext");
  var b = document.querySelector(".registertext");
  if (id === "log-form") {
    x.style.display = "flex";
    y.style.display = "none";
    a.style.backgroundColor = "#40a2e3";
    a.style.borderRadius = "10px";
    a.style.padding = "10px 20px 10px 20px";
    a.style.margin = "5px";
    a.style.color = "#fff";
    b.style.color = "#000";
    b.style.backgroundColor = "#bbe2ec";
  } else if (id === "reg-form") {
    x.style.display = "none";
    y.style.display = "flex";
    b.style.backgroundColor = "#40a2e3";
    b.style.borderRadius = "10px";
    b.style.padding = "10px 20px 10px 20px";
    b.style.margin = "5px";
    b.style.color = "#fff";
    a.style.color = "#000";
    a.style.backgroundColor = "#bbe2ec";
  }
}
// saveing data in local storage

const x = "../assests/x-mark.png";
const y = "../assests/tick.png";
const failstyle = {
  backgroundColor: "#f8d7da",
  color: "#721c24",
  border: "1px solid #721c24",
};
const sucessstyle = {
  backgroundColor: "#74E291",
  color: "#12372A",
  border: "1px solid #12372A",
};
const saveToLocalStorage = () => {
  const username = document.getElementById("userinput").value;
  const email = document.getElementById("usermail").value;
  const phone = document.getElementById("userphone").value;
  const password = document.getElementById("userpass").value;

  if (username && email && phone && password) {
    const userData = {
      username: username,
      email: email,
      phone: phone,
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    clearregfields();
    showAlert("User registered sucessfully", y, sucessstyle);
  } else {
    clearregfields();
    showAlert("Please fill all the fields.", x, failstyle);
  }
};
document
  .getElementById("savedata")
  .addEventListener("click", saveToLocalStorage);

//Getting data from local storage
const login = () => {
  const username = document.getElementById("loginuser").value;
  const password = document.getElementById("loginpass").value;

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    if (username === userData.username && password === userData.password) {
        window.location.href = "../Pages/Profilepage.html";
        clearlogfields();
        showAlert("Login successful", y, sucessstyle);
    } else{
        clearlogfields();
        showAlert("Invalid username or password.", x, failstyle);
    }
  } else {
    showAlert("Fill all feilds.", x, failstyle);

  }
};

document.getElementById("loginbtn").addEventListener("click", login);

const alert = document.querySelector(".alert");
function showAlert(text, imgUrl, style) {
  alert.style.opacity = "0";
  alert.style.display = "flex";
  alert.innerHTML = `<img src="${imgUrl}" style=" margin-top: 2px; height: 20px; width: 20px;"> <p style="margin-left:5px";>${text}</p>`; // Set the text and image
  Object.assign(alert.style, style);
  alert.offsetHeight;
  alert.style.transition = "opacity 0.5s";
  alert.style.opacity = "1";
  setTimeout(hideAlert, 5000);
}

function hideAlert() {
  alert.style.opacity = "0";
  setTimeout(() => {
    alert.style.display = "none";
    alert.style.opacity = "";
  }, 500);
}

function unhidePassword() {
    var passwordInput = document.getElementById("userpass");
    passwordInput.type = "text";
}
function hidePassword() {
    var passwordInput = document.getElementById("userpass");
    passwordInput.type = "password";
}
document.getElementById("userpass").addEventListener("mouseleave", hidePassword);
function unhidePass() {
    var passwordInput = document.getElementById("loginpass");
    passwordInput.type = "text";
}
function hidePass() {
    var passwordInput = document.getElementById("loginpass");
    passwordInput.type = "password";
}
document.getElementById("loginpass").addEventListener("mouseleave", hidePass);
function clearregfields  (){
    document.getElementById("userinput").value = "";
    document.getElementById("usermail").value = "";
    document.getElementById("userphone").value = "";
    document.getElementById("userpass").value = "";
}
function clearlogfields () {
    document.getElementById("loginuser").value = "";
    document.getElementById("loginpass").value = "";
}
function togoogle() {
    window.location.href="https://accounts.google.com/v3/signin/"
}
function tofacebook() {
    window.location.href="https://web.facebook.com/login/?_rdc=1&_rdr"
}
function toappleid(){
    window.location.href="https://appleid.apple.com/sign-in"
}