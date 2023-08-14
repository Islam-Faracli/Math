let cardDiv = document.querySelector(".cards")

function getData(){
    fetch("../db/Exams.json")
    .then(res => res.json())
    .then(data => {
        for(let user of data){
            console.log(data)
            cardDiv.innerHTML += `
            <div class="card">
                <img class="student-img" src="${user.userImage}" alt="">

                <div class="name">
                    <p>${user.questions}</p>
                    <p>${user.fullName}</p>
                </div>

                <p class="card-title">${user.examName}</p>
                <p class="right">${user.price}</p>
                <div class="card-buttons">
                    <a href="#">Teste basla</a>
                    <a href="#">Daha etrafli</a>
                </div>
            </div>
            `
        }
    })
}

getData();
