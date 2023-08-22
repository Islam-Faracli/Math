let options=document.querySelectorAll(".options");

options.forEach((element) => {
    element.addEventListener("click", ()=>{
        options.forEach((items)=>{
            items.classList.remove("selected");
        })
        element.classList.add("selected");
        
    })
})

//dark mode

let body = document.querySelector("body");
let toDark = document.querySelector(".mode-box");
let p = document.querySelectorAll("p");
let h2 = document.querySelectorAll("h2");
let span = document.querySelectorAll("span");

toDark.addEventListener("click", () => {
    toDark.classList.toggle("toDarkMode");
    setTimeout(() => {
        body.classList.toggle("darhTheme");
        p.forEach((item) => {
            item.classList.toggle("toDarkMode");
        });
        h2.forEach((item) => {
            item.classList.toggle("toDarkMode");
        });
        span.forEach((item) => {
            item.classList.toggle("toDarkMode");
        });

        if (toDark.classList.contains("toDarkMode")) {
            localStorage.setItem("toDarkMode", true);
        } else {
            localStorage.setItem("toDarkMode", false);
        }
    }, 250);
});

window.onload = function () {
    let localusers = localStorage.getItem("toDarkMode");
    if (localusers === "true") {
        toDark.classList.toggle("toDarkMode");
        setTimeout(() => {
            body.classList.toggle("darhTheme");
            p.forEach((item) => {
                item.classList.toggle("toDarkMode");
            });
            h2.forEach((item) => {
                item.classList.toggle("toDarkMode");
            });
            span.forEach((item) => {
                item.classList.toggle("toDarkMode");
            });
        }, 0);
    }
};


let videoPart = document.querySelector("#videos-part");

function getData(){
    fetch("../db/students.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
                videoPart.innerHTML += `
                <div class="separate-video">
                    <img src="../iMAGES/Tiny.png" alt="">
                    <div id="video-title">
                        <p>${element.questions} sual</p>
                        <p class="card-title">${element.fullName}</p>
                    </div>
                    <p>${element.examName}</p>
                    <p>${element.price}</p>
                    <div id="button-part">
                    <button id="daha-etraf"><a href="../imtahanenter.html">Testə başla</a></button>
                        <button id="daha-etraf"><a href="../daha-etrafli.html">Daha ətraflı</a></button>
                    </div>
                </div>
                `
            })
        })
    }
        


getData();


//search for names

let filterInput = document.querySelector('#search-text');

filterInput.addEventListener('keyup', filterData);

function filterData(e) {
    let inputValue = e.target.value.toUpperCase();
    let cardsTitle = document.querySelectorAll('.card-title');

    cardsTitle.forEach(function (title) {
        let titleText = title.textContent.toUpperCase();

        if (titleText.includes(inputValue)) {
            title.parentElement.parentElement.style.display = 'block';
        } else {
            title.parentElement.parentElement.style.display = 'none';
        }
    });
};
