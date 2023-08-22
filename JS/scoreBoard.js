let userGrade;
let users=document.querySelector(".scoreBoard-page");
fetch("/db/students.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((item)=>{
        users.innerHTML+=`
        <div class="users">
        <img src="${item.userImage}" alt="" class="user-photo">
        <p class="fullName">${item.fullName}</p>
        <p class="points">${item.point}/100 Bal</p>
        <p class="grade">${item.grade}</p>
        </div>
        `;
    })

    userGrade=document.querySelectorAll('.grade');
})

// search as type
let typeSpan=document.querySelector(".type-list > span");
let selectTypes=document.querySelectorAll(".select-type li")

selectTypes.forEach((items)=>{
    items.addEventListener("click", ()=>{
        typeSpan.textContent=items.textContent
        userGrade.forEach((element)=>{
            if(typeSpan.textContent.includes("All")){
                element.parentElement.style.display="flex";
            }
            else if(typeSpan.textContent.includes(element.textContent)){
                element.parentElement.style.display="flex";
            }
            else{
                element.parentElement.style.display="none";
            }
        });
    });
});

// dark mode
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