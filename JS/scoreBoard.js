
let users=document.querySelector(".scoreBoard-page");
fetch("/db/scoreBoard.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((item)=>{
        users.innerHTML+=`
        <div class="users">
            <img src="${item.userImage}" alt="" class="user-photo">
            <p class="fullName">${item.fullName}</p>
            <p class="points">${item.point}</p>
            <p class="grade">${item.grade}</p>
        </div>
        `;
    })


})

// dark mode
let body = document.querySelector("body");
let toDark = document.querySelector(".mode-box");
let p=document.querySelectorAll("p");
let h2=document.querySelectorAll("h2");
let span=document.querySelectorAll("span");
toDark.addEventListener("click", ()=>{
    toDark.classList.toggle("toDarkMode");
    setTimeout(()=>{

        body.classList.toggle("darhTheme");
        p.forEach((item)=>{
            item.classList.toggle("toDarkMode");
        })
        h2.forEach((item)=>{
            item.classList.toggle("toDarkMode");
        })
        span.forEach((item)=>{
            item.classList.toggle("toDarkMode");
        })
        reytinq.classList.toggle("toDarkMode");
    },250)
    
})