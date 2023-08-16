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

setInterval(() => {
  todayDate = new Date();

  day.innerHTML = todayDate.getDate();
  month.innerHTML = (todayDate.getMonth() < 9 ? "0" : "") + (todayDate.getMonth() + 1);
  year.innerHTML = todayDate.getFullYear();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  date.innerHTML = daysOfWeek[todayDate.getDay()];

  hour.innerHTML = (todayDate.getHours() < 10 ? "0" : "") + todayDate.getHours();
  minute.innerHTML = (todayDate.getMinutes() < 10 ? "0" : "") + todayDate.getMinutes();
  second.innerHTML = (todayDate.getSeconds() < 10 ? "0" : "") + todayDate.getSeconds();
});
