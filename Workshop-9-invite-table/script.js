const countDownForm = document.getElementById("countDownForm");
const inputContainer = document.getElementById("input-container");
const datePickerEl = document.getElementById("date-picker");
const countDownEl = document.getElementById("countdown");
const countDownTitleEl = document.getElementById("countdown-title");
const countDownButtonEl = document.getElementById("countdown-button");
const timeSpanEl = document.querySelectorAll("span");
const completedEl = document.getElementById("complete");
const completeInfoEl = document.getElementById("complete-info");
const completeButtonEl = document.getElementById("complete-button");

let countDownTitle = "";
let countDownDate = "";
let countDownValue = Date;
let countDownActive;
let saveCountDown;

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

countDownForm.addEventListener("submit", updateCountDown);

function updateCountDown(e) {
  e.preventDefault();
  countDownTitle = e.srcElement[0].value;
  countDownDate = e.srcElement[1].value;

  if (countDownTitle === "") {
    alert("Was wrong");
  } else {
    saveCountDown = { title: countDownTitle, date: countDownDate };
    localStorage.setItem("countDown", JSON.stringify(saveCountDown));
    countDownValue = new Date(countDownDate).getTime();
    setUpTime();
  }
}

function setUpTime() {
  countDownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownValue - now;
    const newDays = Math.floor(distance / days);
    const newHours = Math.floor((distance % days) / hours);
    const newMinutes = Math.floor((distance % hours) / minutes);
    const newSeconds = Math.floor((distance % minutes) / seconds);
    inputContainer.hidden = true;
    if (distance < 0) {
      countDownEl.hidden = true;
      completedEl.hidden = false;
      completeInfoEl.textContent = `${countDownTitle} Date: ${countDownDate}`;
      clearInterval(countDownActive);
    } else {
      countDownTitleEl.textContent = `${countDownTitle}`;
      timeSpanEl[0].textContent = `${newDays}`;
      timeSpanEl[1].textContent = `${newHours}`;
      timeSpanEl[2].textContent = `${newMinutes}`;
      timeSpanEl[3].textContent = `${newSeconds}`;
      countDownEl.hidden = false;
      completedEl.hidden = true;
    }
  }, seconds);
}
