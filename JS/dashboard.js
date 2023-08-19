
// to dark mode

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