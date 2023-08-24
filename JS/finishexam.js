let modeChanger = document.querySelector('#mode-case');
let allptexts = document.querySelectorAll("p:not(.header-second-part)");
let alllabeltexts = document.querySelectorAll('label');
let headerpart = document.querySelector('header');
let formpart = document.querySelector('form');
let mainpart = document.querySelector('main');
let iconleft = document.querySelector('#icon-left-white');
let icondown = document.querySelector('#icon-down-white');
let textboxes = document.getElementsByClassName('details');
let middleImage = document.querySelector('main > div');

function todark() {
    setTimeout(() => {
        for (let i = 0; i < allptexts.length; i++) {
            allptexts[i].style.color = 'white';
        }
        for (let i = 0; i < alllabeltexts.length; i++) {
            alllabeltexts[i].style.color = 'white';
        }
        for (let i = 0; i < textboxes.length; i++) {
            textboxes[i].style.background = '#393139';
        }
        headerpart.style.backgroundColor = '#2A2A2A';
        formpart.style.backgroundColor = '#393139'
        mainpart.style.backgroundColor = '#302B2B';
        iconleft.style.background = 'url(../ICONS/white-arrow-left.svg)'
        icondown.style.background = 'url(../ICONS/white-arrow-down.svg)'
        middleImage.style.background = 'url(../IMAGES/imageblack46.svg)'
    }, 250);
}

window.onload = function () {
    let localusers = localStorage.getItem("toDarkMode");
    if (localusers === "true") { // Check for string "true"
        todark();
    }
};