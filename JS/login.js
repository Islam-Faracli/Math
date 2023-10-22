
//password type password or text
const eyeicon = document.querySelector('span');
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

privacyCheckbox.addEventListener('click', () => {
    checked = privacyCheckbox.classList.toggle('privacy-checkbox-img');
});