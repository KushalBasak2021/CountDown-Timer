let diff;
function countdown() {
  const countDate = new Date("Sep 17,2021 08:00:00").getTime();
  const now = new Date().getTime();
  diff = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(diff / day);
  const textHour = Math.floor((diff % day) / hour);
  const textMinute = Math.floor((diff % hour) / minute);
  const textSecond = Math.floor((diff % minute) / second);
  console.log(textSecond);

  if (textDay < 10) {
    document.querySelector(".day").innerHTML = `0${textDay}`;
  } else document.querySelector(".day").innerHTML = textDay;
  if (textHour < 10) {
    document.querySelector(".hour").innerHTML = `0${textHour}`;
  } else document.querySelector(".hour").innerHTML = textHour;
  if (textMinute < 10) {
    document.querySelector(".minute").innerHTML = `0${textMinute}`;
  } else document.querySelector(".minute").innerHTML = textMinute;
  if (textSecond < 10) {
    document.querySelector(".second").innerHTML = `0${textSecond}`;
  } else document.querySelector(".second").innerHTML = textSecond;
}

countdown();

let timeLeft = setInterval(countdown, 1000);

function timer() {
  if (diff >= 1000) {
    timeLeft;
  } else {
    clearInterval(timeLeft);
  }
}

setInterval(timer, 1000);
