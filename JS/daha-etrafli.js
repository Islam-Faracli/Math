let options=document.querySelectorAll(".options");

options.forEach((element) => {
    element.addEventListener("click", ()=>{
        options.forEach((items)=>{
            items.classList.remove("selected");
        })
        element.classList.add("selected");
    })
})


// Api part

let reytinq=document.querySelector(".reytinq");
fetch("/db/students.json")
.then((response)=>response.json())
.then((data)=>{
    data.forEach((item)=>{
        reytinq.innerHTML+=`
        <div class="users" >
        <img src="/icons/crown-icon.png" alt="">
        <p class="username">${item.fullName}</p>
        <p class="points">${item.point}/100 Bal</p>
        <p class="date">${item.date}</p>
        </div>
        `;
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
        reytinq.classList.toggle("toDarkMode");

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
            reytinq.classList.toggle("toDarkMode");
        }, 0);
    }
};