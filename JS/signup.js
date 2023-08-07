let eyeicon = document.querySelector('#eye-icon');
let password = document.querySelector
('#password-input');
let login = document.querySelector('button');
let privacyCheckbox = document.querySelector('.privacy-checkbox');
let checked;
let inputyear
//password type password or text
eyeicon.addEventListener('click', visibilty);

function visibilty () {
    if (password.type == 'password') {
        password.type = 'text';
        eyeicon.classList.replace('eye-icon-hide', 'eye-icon-visible');
    } else {
        password.type = 'password';
        eyeicon.classList.replace('eye-icon-hide', 'eye-icon-visible');
    }
}
//
privacyCheckbox.addEventListener('click', () => {
    checked = privacyCheckbox.classList.toggle('privacy-checkbox-img');
});

//check sign in conditions
let allUsers = []; //? Array to store all user data

login.addEventListener("click", function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById("password-input").value;
    let date = document.getElementById("date").value;
    let student = document.getElementById("student");
    inputyear = date.slice(0, 4);
    let currentdate = new Date();
    let currentyear = currentdate.getFullYear();
    let year = currentyear - inputyear;

if (checked && date !== "" && email !== "" && password !== "") {
  let foundUser = allUsers.find(user => user.email === email);

  if (foundUser) {
    alert("This email is already exists. Please try with another email.");
  } else {
    if (year < 7) {
      alert("Please choose another date!");
    } else {
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
      } else {
        let userData = {
          rank: student.checked ? "student" : "teacher",
          email: email,
          password: password,
          date: date
        };

        allUsers.unshift(userData);
        let allUsersJSON = JSON.stringify(allUsers);
        localStorage.setItem("allUsers", allUsersJSON);
      }
    }
  }
} else {
  alert("Please fill in all the required fields and accept the privacy policy.");
}

//when onload restore the users info
window.onload = function () {
    let localusers = JSON.parse(localStorage.getItem("allUsers"));
    if (localusers) {
        allUsers = localusers;
    } 
}});