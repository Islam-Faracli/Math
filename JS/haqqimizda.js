let options=document.querySelectorAll(".options");

options.forEach((element) => {
    element.addEventListener("click", ()=>{
        options.forEach((items)=>{
            items.classList.remove("selected");
            
        })
        element.classList.add("selected");
        
    })
})

//dark mode

let body = document.querySelector("body");
let toDark = document.querySelector(".mode-box");
let p=document.querySelectorAll("p");
let h2=document.querySelectorAll("h2");
let span=document.querySelectorAll("span");
console.log(p);
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