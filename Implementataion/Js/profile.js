function uploadImage() {
  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function() {
      var img = document.getElementById('profileImage');
      img.style.border= "1px solid #000"
      img.src = reader.result;

      
      localStorage.setItem('profileImage', reader.result);
    };

    reader.readAsDataURL(file);
  };

  input.click();
}
window.onload = function() {
  var savedImage = localStorage.getItem('profileImage');
  if (savedImage) {
    var img = document.getElementById('profileImage');
    img.src = savedImage;
  
}

const userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);

const username = document.getElementById("dataname");
const useremail = document.getElementById("datamail");
const userphone = document.getElementById("dataphone");
const userpass = document.getElementById("datapass");


// Check if userData exists and set the text content of HTML elements
if (userData) {
    username.innerHTML = userData.username || "N/A";
     useremail.innerHTML = maskEmail(userData.email) || "N/A";
    userphone.innerHTML = userData.phone || "N/A";
    userpass.innerHTML = userData.password ? "******" : "N/A";
} else {
    // Fallback if userData is not found
    console.log("User data not found in localStorage.");
}
};

function maskEmail(email) {
  if (!email) return null;

  const atIndex = email.indexOf('@');
  if (atIndex <= 1) return email;
  const firstLetter = email.charAt(0);
  const maskedPart = firstLetter + '*'.repeat(4);
  const domainPart = email.substring(atIndex);
  return maskedPart + domainPart;
}
function unhidePassword() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  var passwordField = document.getElementById("datapass");
  passwordField.textContent = userData.password;
}
function hidePassword() {
  var passwordField = document.getElementById("datapass");
  passwordField.textContent = "******";
}
function logout(){
  deleteImageFromLocalStorage('profileImage');
  window.location.replace("../Pages/Authform.html");

}
function deleteImageFromLocalStorage(key) {
  if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      console.log(`Image with key "${key}" has been removed from local storage.`);
  } else {
      console.log(`No image found with key "${key}".`);
  }
}