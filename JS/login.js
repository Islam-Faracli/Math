//password type password or text
let eyeicon = document.querySelector('span');
let password = document.querySelector('#password-input');
let login = document.querySelector('button');
let privacyCheckbox = document.querySelector('.privacy-checkbox');
let checked;
//password type password or text
eyeicon.addEventListener('click', visibilty);

function visibilty () {
    if (password.type === 'password') {
        password.type = 'text';
        eyeicon.classList.replace('eye-icon-hide', 'eye-icon-visible');
    } else {
        password.type = 'password';
        eyeicon.classList.replace('eye-icon-visible', 'eye-icon-hide');
    }
}

let allUsers = []; 

if (localStorage.getItem('allUsers')) {
  allUsers = JSON.parse(localStorage.getItem('allUsers'));
}
privacyCheckbox.addEventListener('click', () => {
    checked = privacyCheckbox.classList.toggle('privacy-checkbox-img');
    console.log(checked);
});

//check if user is already exist or not
login.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password-input").value;
    if (email !== "" && password !== "" && checked) {
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