// let options=document.querySelectorAll(".options");

// options.forEach((element) => {
//     element.addEventListener("click", ()=>{
//         options.forEach((items)=>{
//             items.classList.remove("selected");
//         })
//         element.classList.add("selected");
        
//     })
// })

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
                    <img src="./IMAGES/video.svg" alt="">
                    <div id="video-title">
                        <p>${element.questions} sual</p>
                        <p>${element.fullName}</p>
                    </div>
                    <p>${element.examName}</p>
                    <button>Videonu izlə</button>
                </div>
                `
            })
        })
    }
        


getData();