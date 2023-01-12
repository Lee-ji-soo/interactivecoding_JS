// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Basic Pitch Detection
=== */
// import { draw } from "./draw";
let audioContext;
let pitch;

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 560;
audioContext = new AudioContext();
const $audioElement = document.querySelector("#audio");
const $playButton = document.querySelector("#play-button");
const $canvas = document.querySelector("#canvas");
const $canvasInner = $canvas.querySelector("#canvas-inner");

async function setup() {
  const stream = $audioElement.captureStream();
  startPitch(stream, audioContext);
}

function startPitch(stream, audioContext) {
  pitch = ml5.pitchDetection("./model/", audioContext, stream, modelLoaded);
}

function modelLoaded() {
  document.querySelector("#status").textContent = "Model Loaded";
  getPitch();
}

$canvas.style.width = "100px";
$canvas.style.height = "100px";
$canvas.style.overflow = "hidden";
$canvasInner.style.width = "500px";
$canvasInner.style.height = "100%";
$canvasInner.style.background =
  "linear-gradient(90deg, #948E99 0%, #2E1437 100%)";
function draw({ frequency }) {
  $canvas.style.width = `${frequency}px`;
  $canvas.style.transition = "all 0.3s cubic-bezier(.29, 1.01, 1, -0.68)";
}

let temp = 0;
function getPitch() {
  if ($playButton.dataset.playing === "false") {
    return;
  }
  pitch.getPitch(function (err, frequency) {
    if (frequency) {
      temp = frequency;
      draw({
        frequency,
      });
      document.querySelector("#result").textContent = frequency;
    } else {
      draw({
        frequency: temp,
      });
      document.querySelector("#result").textContent = temp;
    }
    getPitch();
  });
}

$playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play or pause track depending on state
    if ($playButton.dataset.playing === "false") {
      setup();
      $audioElement.play();
      $playButton.dataset.playing = "true";
    } else if ($playButton.dataset.playing === "true") {
      $audioElement.pause();
      $playButton.dataset.playing = "false";
    }
  },
  false
);
