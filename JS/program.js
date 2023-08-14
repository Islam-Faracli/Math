let cardDiv = document.querySelector(".cards")
let body = document.querySelector("body");
let toggleBtn = document.querySelector("#dark-mode");


function getData(){
    fetch("../db/Exams.json")
    .then(res => res.json())

        data.forEach(element => {
        for(let user of data){
           

            cardDiv.innerHTML += `
            <div class="card">
                <img class="student-img" src="${element.userImage}" alt="">

                <div class="name">
                    <p>${element.questions}</p>
                    <p>${element.fullName}</p>
                </div>

                <p class="card-title">${element.examName}</p>
                <p class="right">${element.price}</p>
                <div class="card-buttons">
                    <a href="#" class="purple-card-btn">Teste basla</a>
                    <a href="#" class="dark-card-btn">Daha etrafli</a>
                </div>
            </div>
            `
        })
    })
}


getData();

function takeComponents(){
    
}

setTimeout(takeComponents, 2000)




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
})
