import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { darkMode } from "./theme.js";
import {
  buttonDarkMode,
  buttonLightMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonDecrease,
  buttonIncrease,
  buttonFire,
  buttonForest,
  buttonRain,
  buttonStore,
  minutesDisplay,
  secondsDisplay,
  svgForest,
  svgRain,
  svgStore,
  svgFire,
  volFire,
  volRain,
  volStore,
  volForest,
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

darkMode({
  buttonDarkMode,
  buttonLightMode,
});

function togglePlay(myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

// EVENTS
// CONTROLS
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

// CARD BUTTONS
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

// CARD VOLUME
volForest.addEventListener("input", () => {
  sound.forestAudio.volume = volForest.value;
});

volRain.addEventListener("input", () => {
  sound.rainAudio.volume = volRain.value;
});

volStore.addEventListener("input", () => {
  sound.storeAudio.volume = volStore.value;
});

volFire.addEventListener("input", () => {
  sound.fireAudio.volume = volFire.value;
});
