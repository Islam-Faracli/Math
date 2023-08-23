let modeChanger = document.querySelector('#mode-case');

let alllabeltexts = document.querySelectorAll('label');
let headerpart = document.querySelector('header');
let formpart = document.querySelector('form');
let mainpart = document.querySelector('main');
let iconleft = document.querySelector('#icon-left-white');
let icondown = document.querySelector('#icon-down-white');
let textboxes = document.getElementsByClassName('details');
let modecircle = document.querySelector('#mode-circle');
let barcase = document.querySelector('#bar');
let usericon = document.querySelector('#telebe-adi-icon');
let options = document.querySelectorAll('.options');
let question = document.querySelector('#question');
console.log(alllabeltexts.values);
function getData(){
    fetch("../db/questions.json")
    .then(res => res.json())
    .then(data => {
        for(let user of data){
            question.innerHTML += `
            <div id="separate-ques">
                <p id="onepoint">(1 point)</p>
                <p id="question-part">${user.question}</p>
                <p>Düzgün variantı seçin</p>
                <div class="options">
                    <input name="answer" type="radio">
                    <p id="answer-text">${user.answer1}</p>
                </div>
                <div class="options">
                    <input name="answer" type="radio">
                    <p id="answer-text">${user.answer2}</p>
                </div>
                <div class="options">
                    <input name="answer" type="radio">
                    <p id="answer-text">${user.answer3}</p>
                </div>
                <div class="options">
                    <input name="answer" type="radio">
                    <p id="answer-text">${user.answer4}</p>
                </div>
                <div class="options">
                    <input name="answer" type="radio">
                    <p id="answer-text">${user.answer5}</p>
                </div>
            </div>
            `
        }
    })
}



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

function todark () {
    setTimeout(() => {
        let options = document.querySelectorAll('.options');
        let allptexts = document.querySelectorAll("p:not(.header-second-part)");
    for (let i = 0; i < allptexts.length; i++) {
        allptexts[i].style.color = 'white';
    }
    for (let i = 0; i < alllabeltexts.length; i++) {
        alllabeltexts[i].style.color = 'white';
    }
    for (let i = 0; i < textboxes.length; i++) {
        textboxes[i].style.background = '#393139';
    }
    for (let i = 0; i < options.length; i++) {
        options[i].style.background = '#393535'
    }
    headerpart.style.backgroundColor = '#2A2A2A';
    formpart.style.backgroundColor = '#393139'
    mainpart.style.backgroundColor = '#302B2B';
    iconleft.style.background = 'url(../ICONS/white-arrow-left.svg)'
    icondown.style.background = 'url(../ICONS/white-arrow-down.svg)'
    modeChanger.style.background = 'var(--purple)'
    modecircle.style.background = '#302B2B'
    barcase.style.backgroundColor = '#5F5E5E';
    usericon.style.background = 'url(../ICONS/userwhite.svg)'
    localStorage.setItem("toDarkMode", true);
}, 250);
}

function tolight () {
    setTimeout(() => {
        let options = document.querySelectorAll('.options');
        let allptexts = document.querySelectorAll("p:not(.header-second-part)");
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
    barcase.style.backgroundColor = 'var(--light-2)';
    usericon.style.background = 'url(../ICONS/user.svg)'
    for (let i = 0; i < options.length; i++) {
        options[i].style.background = '#FFF'
    }
    localStorage.setItem("toDarkMode", false);
}, 250);
}

getData();





// timer function
const startingminutes = 10;
let time = startingminutes * 60;

let activeTime = document.querySelector('#active-time');
let imtahanvaxti = document.querySelector('#imtahan-vaxti');

setInterval (updatetime, 1000);

function updatetime() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes < 10 ? minutes = "0" + minutes : minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds;

    activeTime.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

window.onload = function () {
    let localusers = localStorage.getItem("toDarkMode");
    if (localusers === "true") { // Check for string "true"
        modeChanger.classList.add('lighttodark');
        todark();
    }
};

//* popup window    
const modal = document.getElementById("modal");
const closeModal = document.getElementById("back-button");
const nextPageButton = document.getElementById("next-page");
const endButton = document.getElementById("end-exam");

nextPageButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

endButton.addEventListener("click", () => {
    modal.style.display = "none";
});
