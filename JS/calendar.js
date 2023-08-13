let dayOfMonth=[ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
let nameOfMonths =  [ "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr" ];
let dateOfWeek=["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
let div=document.querySelectorAll('main div');
let count=6;
let weekCount=1;
for(let i=0;i<dayOfMonth.length;i++){
    div[i].innerHTML +=`
    <p>${nameOfMonths[i]}</p>
    `;
    if(i<10){
        div[i].innerHTML +=`
            <span>${"0"+(i+1)}</span>
            `;
    }
    else{
        div[i].innerHTML +=`
            <span>${i+1}</span>
            `;
    }
    for(let j=0;j<dateOfWeek.length;j++){
        
        div[i].innerHTML +=`
        <span>${dateOfWeek[j]}</span>
        `
    }
    if(i!=7){
        div[i].innerHTML +=`
    <br>
    `;
    } 
    // div[i].innerHTML +=`
    //     <span style="background-color:yellow;">${weekCount}</span>
    //  `;  
    if(count!=7){
        for(let j=0;j<count;j++){
            div[i].innerHTML +=`
            <span style="color:white;" >0</span>
            `;
        }
    }
    
    for(let j=1;j<=dayOfMonth[i];j++){
        if(count==8 ){
            div[i].innerHTML +=`
             <br>
            `;
            div[i].innerHTML +=`
                 <span style="background-color:yellow;">${weekCount}</span>
                 
            `;
            count=0;
            weekCount++;
        }
        if(j<10){
            div[i].innerHTML +=`
                <span class="lowDate" >${j}</span>
            `;

        }
        else{
            div[i].innerHTML +=`
                <span>${j}</span>
            `
        }
        count++;
    }
    
}