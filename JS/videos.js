let cardDiv = document.querySelector(".cards")
let body = document.querySelector("body");
let toggleBtn = document.querySelector("#dark-mode");
let menu = document.querySelector(".aside-links")
let downW = document.querySelector(".down-white")
let downB = document.querySelector(".down-black")
let searchB = document.querySelector(".searchB");
let searchW = document.querySelector(".searchW")

let cards = [
    `<li class="aside-link-item"><a href="#"><img src="./icons/dashboard-icon-white.png" alt="">Dashboard</a></li>
    <li class="aside-link-item"><a href="#"><img src="./icons/imtahanlar-icon-white.png" alt="">İmtahanlar</a></li>
    <li class="aside-link-item"><a class="active" href="#"><img src="./icons/video-play-icon-white.png" alt="">Onlayn videolar</a></li>
    <li class="aside-link-item"><a href="#"><img src="./icons/chart-icon-white.png" alt="">ScoreBoard</a></li>
    <li class="aside-link-item"><a href="#"><img src="./icons/stickynote.png" alt="">Haqqımızda</a></li>`,

    `<li class="aside-link-item"><a href="#"><img src="./icons/dasblack.svg" alt="">Dashboard</a></li>
    <li class="aside-link-item"><a href="#"><img src="./icons/icon Imtahan.png" alt="">İmtahanlar</a></li>
    <li class="aside-link-item"><a class="active" href="#"><img src="./icons/video-play-icon-white.png" alt="">Onlayn videolar</a></li>
    <li class="aside-link-item"><a href="#"><img src="./icons/icon Scoreboard.png" alt="">ScoreBoard</a></li>
    <li class="aside-link-item"><a href="#"><img src="./icons/icon Haqqimizda.png" alt="">Haqqımızda</a></li>`
]

menu.innerHTML = cards[0];




function getData(){
    fetch("../db/videos.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
                cardDiv.innerHTML += `
                <div class="card">
                    <img class="student-img" src="${element.userImage}" alt="">
    
                    <div class="name">
                        <p>${element.questions}</p>
                        <p>${element.fullName}</p>
                    </div>
    
                    <p class="card-title">${element.examName}</p>
                    <div class="card-buttons">
                        <a href="#" class="purple-card-btn">Teste basla</a>
                    </div>
                </div>
                `
            })
        })
    }
        


getData();






 toggleBtn.addEventListener('click', () =>{
     body.classList.toggle("dark-theme");
     let darkbtn = document.querySelectorAll(".dark-card-btn");
     let logo = document.querySelector(".aside-logo")

     if(body.classList.contains("dark-theme")){
         logo.style.color = "#675af0"
     }

     else{
         logo.style.color = "#fff"
     }

    
     darkbtn.forEach(element =>{
         if(body.classList.contains("dark-theme")){
             element.style.color = "#675af0";
             element.style.border = "1px solid #675af0";
         }

         else{
             element.style.color = "#fff";
             element.style.border = "1px solid #fff";
         }
        
     })
     
     if(menu.innerHTML == cards[0]){
        menu.innerHTML = "";
        menu.innerHTML = cards[1];
     }

     else{
        menu.innerHTML = cards[0]
     }

    if(downB.style.display == "none"){
        downB.style.display = "inline";
        downW.style.display = "none"
     }

     else{
        downB.style.display = "none";
        downW.style.display = "inline"
     }

    if(searchB.style.display == "none"){
        searchB.style.display = "inline";
        searchW.style.display = "none"
    }

    else{
        searchB.style.display = "none";
        searchW.style.display = "inline"
    }
 })