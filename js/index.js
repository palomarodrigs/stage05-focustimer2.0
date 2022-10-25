import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonStore,
  buttonFire,
  svgForest,
  svgRain,
  svgStore,
  svgFire,
} from "./elements.js";

import Sound from "./sounds.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

function togglePlay(myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  sound.pressButton();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton();
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton();
});

buttonIncrease.addEventListener("click", () => {
  sound.pressButton();
  timer.increment();
});

buttonDecrease.addEventListener("click", () => {
  sound.pressButton();
  timer.decrement();
});

buttonForest.addEventListener("click", () => {
  buttonForest.classList.toggle("selected");
  svgForest.classList.toggle("color");
  togglePlay(sound.forestAudio);
});

buttonRain.addEventListener("click", () => {
  buttonRain.classList.toggle("selected");
  svgRain.classList.toggle("color");
  togglePlay(sound.rainAudio);
});

buttonStore.addEventListener("click", () => {
  buttonStore.classList.toggle("selected");
  svgStore.classList.toggle("color");
  togglePlay(sound.storeAudio);
});

buttonFire.addEventListener("click", () => {
  buttonFire.classList.toggle("selected");
  svgFire.classList.toggle("color");
  togglePlay(sound.fireAudio);
});
