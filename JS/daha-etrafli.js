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
// fetch("/db/reytinq.json")
// .then((response)=>response.json())
// .then((data)=>{
//     data.forEach((item)=>{
//         reytinq.innerHTML+=`
//         <div class="users" >
//         <img src="/icons/crown-icon.png" alt="">
//         <p class="username">${item.fullName}</p>
//         <p class="points">${item.point}</p>
//         <p class="date">${item.date}</p>
//         </div>
//         `;
//     })
// })

//dark mode

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
    },250)
    
})