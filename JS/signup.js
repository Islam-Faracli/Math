//password type password or text
let eyeicon = document.querySelector('span');
let password = document.querySelector('#password-input');
let login = document.querySelector('button');

eyeicon.addEventListener('click', visibilty);

function visibilty () {
    if (password.type == "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
}

//check sign in conditions
let allUsers = []; // Array to store all user data

login.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password-input").value;
    let date = document.getElementById("date").value;
    let checkbox = document.getElementById("privacy-checkbox")
    let student = document.getElementById("student");
    let signup = document.getElementById("signup");

    if (checkbox.checked && date !== "" && email !== "" && password !== "") {
        let userData = {
            rank: student.checked ? "student" : "teacher", 
            email: email,
            password: password,
            date: date
        };

        allUsers.unshift(userData); 

        let allUsersJSON = JSON.stringify(allUsers);
        localStorage.setItem('allUsers', allUsersJSON);
    } else {
        alert("Please fill in all the required fields and accept the privacy policy.");
    }
});

//when onload restore the users info
window.onload = function () {
    let localusers = JSON.parse(localStorage.getItem("allUsers"));
    if (localusers) {
        allUsers = localusers;
    }
};


