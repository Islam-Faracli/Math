//password type password or text
let eyeicon = document.querySelector('span');
let password = document.querySelector('#password-input');
let login = document.querySelector('button');
//password type password or text
eyeicon.addEventListener('click', visibilty);

function visibilty () {
    if (password.type == "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
}

let allUsers = []; 

if (localStorage.getItem('allUsers')) {
  allUsers = JSON.parse(localStorage.getItem('allUsers'));
}
//check if user is already exist or not
login.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password-input").value;

    if (email !== "" && password !== "") {
        let foundUser = allUsers.find(user => user.email === email && user.password === password);//?user.email and user.password are exist and correct or not

        if (foundUser) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password. Please try again.");
        }
        
    } else {
        alert("Please enter both email and password.");
    }
});

