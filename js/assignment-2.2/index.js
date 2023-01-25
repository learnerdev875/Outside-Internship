//DOM
function createElement(el, cl, clname, textNode) {
  let element;
  if (cl && clname && textNode) {
    element = document.createElement(el);
    element.setAttribute(cl, clname);
    let text = document.createTextNode(textNode);
    element.appendChild(text);
  } else if (textNode) {
    element = document.createElement(el);
    let text = document.createTextNode(textNode);
    element.appendChild(text);
  } else {
    element = document.createElement(el);
    element.setAttribute(cl, clname);
  }
  return element;
}
let main = document.querySelector("#main");
let buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("class", "buttons");
let buttons = ["stopwatch", "clock"];

for (let i = 0; i < buttons.length; i++) {
  let button = document.createElement("button");
  button.setAttribute("id", buttons[i]);
  let buttonContent = document.createTextNode(
    buttons[i].charAt(0).toUpperCase() + buttons[i].slice(1)
  );
  button.appendChild(buttonContent);
  buttonsDiv.appendChild(button);
}
main.appendChild(buttonsDiv);

let stopwatchDiv = document.createElement("div");
stopwatchDiv.setAttribute("class", "stopwatch__container");

let p = document.createElement("p");
let spans = ["stopwatch_hours", "stopwatch_mins", "stopwatch_secs"];

for (let i = 0; i < spans.length; i++) {
  let span = document.createElement("span");
  span.setAttribute("id", spans[i]);
  let spanContent = document.createTextNode("00");
  span.appendChild(spanContent);
  p.appendChild(span);
}

//stopwatch
// let hrSpan = createElement("span", "id", spans[0]);
// let minSpan = createElement("span", "id", spans[1]);
// let secSpan = createElement("span", "id", spans[2]);
// let spanContent = document.createTextNode("00");
// hrSpan.appendChild(spanContent);
// minSpan.appendChild(spanContent);
// secSpan.appendChild(spanContent);

// p.innerHTML = `<span></span>:<span`;

stopwatchDiv.appendChild(p);
main.appendChild(stopwatchDiv);

let clockDiv = document.createElement("div");
clockDiv.setAttribute("class", "clock__container");
let p1 = document.createElement("p");
p1.setAttribute("class", "clock__time");
clockDiv.appendChild(p1);
main.appendChild(clockDiv);

let stopwatchBtns = ["start", "stop", "reset"];

let stopwatchBtnsDiv = document.createElement("div");
stopwatchBtnsDiv.setAttribute("class", "stopwatch__actions");
for (let i = 0; i < stopwatchBtns.length; i++) {
  let button = document.createElement("button");
  button.setAttribute("id", stopwatchBtns[i]);
  let content = document.createTextNode(
    stopwatchBtns[i].charAt(0).toUpperCase() + stopwatchBtns[i].slice(1)
  );
  button.appendChild(content);
  stopwatchBtnsDiv.appendChild(button);
}
main.appendChild(stopwatchBtnsDiv);

//buttons
let clock = document.querySelector("#clock");
let stopwatch = document.querySelector("#stopwatch");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

//stopwatch
let stopwatch_container = document.querySelector(".stopwatch__container");
let stopwatch_hours = document.querySelector("#stopwatch_hours");
let stopwatch_mins = document.querySelector("#stopwatch_mins");
let stopwatch_secs = document.querySelector("#stopwatch_secs");

//current time
let clock_container = document.querySelector(".clock__container");
let clock_time = document.querySelector(".clock__time");

//when stopwatch button is clicked
stopwatch.addEventListener("click", function () {
  if (stopwatch_container.classList.contains("hidden")) {
    stopwatch_container.classList.remove("hidden");
    clock_container.classList.add("hidden");
    // clock.disabled = true;
  }
});

//when clock button is clicked
clock.addEventListener("click", function () {
  if (clock_container.classList.contains("hidden")) {
    clock_container.classList.remove("hidden");
    stopwatch_container.classList.add("hidden");
  }
});
window.addEventListener("load", function () {
  //   stopwatch.disabled = true;
  //   start.disabled = true;
  //   stop.disabled = true;
  //   reset.disabled = true;
  stopwatch_container.classList.add("hidden");
  function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //time formatting
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    clock_time.innerText = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(getTime, 1000);
});

let timer_seconds = 0;
let timer_minutes = 0;
let timer_hours = 0;
let interval = null;

function startTimer() {
  timer_seconds++;

  if (timer_seconds > 59) {
    timer_seconds = 0;
    timer_minutes++;

    if (timer_minutes > 59) {
      timer_minutes = 0;
      timer_hours++;
    }
  }

  //time formatting
  let h = timer_hours < 10 ? "0" + timer_hours : timer_hours;
  let m = timer_minutes < 10 ? "0" + timer_minutes : timer_minutes;
  let s = timer_seconds < 10 ? "0" + timer_seconds : timer_seconds;
  stopwatch_secs.innerHTML = s;
  stopwatch_mins.innerHTML = m;
  stopwatch_hours.innerHTML = h;
}

//start timer
start.addEventListener("click", function () {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 1000);
});

//pause timer
stop.addEventListener("click", function () {
  clearInterval(interval);
});

//reset timer
reset.addEventListener("click", function () {
  clearInterval(interval);
  timer_seconds = 0;
  timer_minutes = 0;
  timer_hours = 0;
  stopwatch_secs.innerHTML = "0" + timer_seconds;
  stopwatch_mins.innerHTML = "0" + timer_minutes;
  stopwatch_hours.innerHTML = "0" + timer_hours;
});
