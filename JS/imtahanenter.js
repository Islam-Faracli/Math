let modeChanger = document.querySelector('#mode-case');
let allptexts = document.querySelectorAll("p:not(.header-second-part)");
let alllabeltexts = document.querySelectorAll('label');
let headerpart = document.querySelector('header');
let formpart = document.querySelector('form');
let mainpart = document.querySelector('main');
let iconleft = document.querySelector('#icon-left-white');
let icondown = document.querySelector('#icon-down-white');
let textboxes = document.getElementsByClassName('details');
let modecircle = document.querySelector('#mode-circle');

modeChanger.addEventListener('click', () => {
    
    if (modeChanger.classList.contains('darktolight')) {
        modeChanger.classList.replace('darktolight', 'lighttodark');
        todark();
    }

    else if (modeChanger.classList.contains('lighttodark')) {
        modeChanger.classList.replace('lighttodark', 'darktolight');
        tolight();
    }

    else {
        modeChanger.classList.add('lighttodark');
        todark();
    }
});



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
        modeChanger.style.background = 'var(--purple)'
        modecircle.style.background = '#302B2B'
    }, 250);
}

function tolight () {
    setTimeout(() => {
        for (let i = 0; i < allptexts.length; i++) {
            allptexts[i].style.color = 'var(--black)';
        }
        for (let i = 0; i < alllabeltexts.length; i++) {
            alllabeltexts[i].style.color = 'var(--black)';
        }
        for (let i = 0; i < textboxes.length; i++) {
            textboxes[i].style.background = '#FFF';
        }
        headerpart.style.backgroundColor = '#FFF';
        formpart.style.backgroundColor = '#F6F6F6';
        mainpart.style.backgroundColor = '#F6F6F6';
        iconleft.style.background = 'url(../ICONS/arrow-left.svg)'
        icondown.style.background = 'url(../ICONS/arrow-down.svg)'
        modeChanger.style.background = '#E2E2E2';
        modecircle.style.background = '#FFF'
    }, 250);
}

window.onload = function () {
    let localusers = localStorage.getItem("toDarkMode");
    if (localusers === "true") { // Check for string "true"
        modeChanger.classList.add('lighttodark');
        todark();
    }
};