
let cards=document.querySelector(".cards-container");

function getData(){
    fetch("/db/students.json")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        for(let i=0;i<4;i++){
            cards.innerHTML +=`
            <div class="cards">
                <img src="/iMAGES/Tiny.png" alt="">
                <div class="text-box">
                    <div class="userName-and-countQuestion">
                        <p>${data[i].questions}</p>
                        <p>Rəhimli Sənan</p>
                    </div>
                    <p>${data[i].examName}</p>
                    <div class="exam-results">
                        <span>${data[i].point}/${parseInt(data[i].questions)}</span>
                        <span>${Math.round((data[i].point/parseInt(data[i].questions))*100)}%</span>
                        <div class="results-scroll">
                            <div style="width:${(data[i].point/parseInt(data[i].questions))*100}%;"></div>
                        </div>
                    </div>
                    <button>
                        <a href="/daha-etrafli.html">Daha ətraflı</a>
                    </button>
                </div>
            </div>
            `;
        }
    })
}

getData();


// to dark mode

let body = document.querySelector("body");
let toDark = document.querySelector(".mode-box");
let p = document.querySelectorAll("p");
let h2 = document.querySelectorAll("h2");
let span = document.querySelectorAll("span");
console.log(p);
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
    if (localusers === "true") { // Check for string "true"
        toDark.classList.toggle("toDarkMode");
        setTimeout(() => {
            body.classList.toggle("darhTheme"); // Fixed typo here
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