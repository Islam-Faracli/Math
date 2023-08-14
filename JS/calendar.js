let dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let nameOfMonths = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "İyun",
  "İyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];
let dateOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
let div = document.querySelectorAll("main div");
let count = 6;

let lastdays = 0;

for (let i = 0; i < dayOfMonth.length; i++) {
  div[i].innerHTML += `
    <p>${nameOfMonths[i]}</p>
    `;
  for (let j = 0; j < dateOfWeek.length; j++) {
    div[i].innerHTML += `
        <span>${dateOfWeek[j]}</span>
        `;
  }
  if (i != 4) {
    div[i].innerHTML += `
        <br>
        `;
  }
  if (count != 7) {
    if (i != 0) {
      lastdays = dayOfMonth[i - 1] - count + 1;
    } else {
      lastdays = 31 - 6 + 1;
    }
    for (let j = 0; j < count; j++) {
      div[i].innerHTML += `
            <span  class="otherMonth" >${lastdays}</span>
            `;
      lastdays++;
    }
  }
  lastdays = 0;
  for (let j = 1; j <= dayOfMonth[i]; j++) {
    if (count == 7) {
      div[i].innerHTML += `
            <br>
            `;

      count = 0;
    }
    if (j < 10) {
      div[i].innerHTML += `
            <span " >${j}</span>
            `;
    } else {
      div[i].innerHTML += `
            <span >${j}</span>
            `;
    }
    count++;
  }

  if (count < 7) {
    for (let k = 1; k <= 7 - count; k++) {
      div[i].innerHTML += `
            <span class="otherMonth" >${k}</span>
            `;
    }
  }
}

let span = document.querySelectorAll("span");

for (let i = 0; i <= span.length; i++) {
  if (i % 7 == 6 || i % 7 == 5) {
    span[i].classList.add("weekEnd");
  }
}

// header

let todayDate = new Date();
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let date = document.querySelector("#date");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let monthName = document.querySelector("#monthName");
let fullYear = document.querySelector("#fullYear");

// setInterval(showTime, 1000);

  day.innerHTML = todayDate.getDate();
  if (todayDate.getMonth() < 10) {
    month.innerHTML = "0" + todayDate.getMonth();
  } else {
    month.innerHTML = todayDate.getMonth();
  }
  year.innerHTML = todayDate.getFullYear();
  switch (todayDate.getDay()) {
    case 1:
      {
        date.innerHTML = "Monday";
      }
      break;
    case 2:
      {
        date.innerHTML = "Tuesday";
      }
      break;
    case 3:
      {
        date.innerHTML = "Wednesday";
      }
      break;
    case 4:
      {
        date.innerHTML = "Thursday";
      }
      break;
    case 5:
      {
        date.innerHTML = "Friday";
      }
      break;
    case 6:
      {
        date.innerHTML = "Saturday";
      }
      break;
    case 0:
      {
        date.innerHTML = "Sunday";
      }
      break;
  }
function showTime() {
  if (todayDate.getHours() < 10) {
    hour.innerHTML = "0" + todayDate.getHours();
  } else {
    hour.innerHTML = todayDate.getHours();
  }

  if (todayDate.getMinutes() < 10) {
    minute.innerHTML = "0" + todayDate.getMinutes();
  } else {
    minute.innerHTML = todayDate.getMinutes();
  }

  if (todayDate.getSeconds() < 10) {
    second.innerHTML = "0" + todayDate.getSeconds();
  } else {
    second.innerHTML = todayDate.getSeconds();
  }
  
}
// showTime();
setInterval(showTime, 1000);
 //internetden tapdigim
// Defining showTime funcion
// function showTime() {
//     // Getting current time and date
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     am_pm = "AM";
 
//     // Setting time for 12 Hrs format
//     if (hour >= 12) {
//         if (hour > 12) hour -= 12;
//         am_pm = "PM";
//     } else if (hour == 0) {
//         hr = 12;
//         am_pm = "AM";
//     }
 
//     hour =
//         hour < 10 ? "0" + hour : hour;
//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;
 
//     let currentTime =
//         hour +
//         ":" +
//         min +
//         ":" +
//         sec +
//         am_pm;
 
//     // Displaying the time
//     document.getElementById(
//         "clock"
//     ).innerHTML = currentTime;
// }
 
showTime();