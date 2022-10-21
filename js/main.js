const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonStop.classList.remove("hide");
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
  secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
}

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");

  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
});

buttonStop.addEventListener("click", function () {
  resetControls();
});

function increment() {
  minutes = minutes < 25 ? Number(minutes) + 5 : (minutes = 25);
  updateTimerDisplay(minutes, 0);
}
function decrement() {
  minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0);
  updateTimerDisplay(minutes, 0);
}
