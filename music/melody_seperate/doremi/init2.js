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
let x = 0;
const y = CANVAS_HEIGHT / 2;
audioContext = new AudioContext();
const $audioElement = document.querySelector("#audio");
const $playButton = document.querySelector("#play-button");
const $canvas = document.querySelector("#canvas");

console.log($canvas);
$canvas.width = CANVAS_WIDTH;
$canvas.height = CANVAS_HEIGHT;
const ctx = canvas.getContext("2d");

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

function draw({ ctx, frequency }) {
  const color = frequency;
  ctx.beginPath();
  ctx.arc(x, y, color, 0, color, false);
  ctx.lineWidth = 1;
  ctx.fill();
  // ctx.fillStyle = `rgb(255, 221, ${color})`;
  // ctx.fillRect(x, y, 10 + x, 10);
  x += 0.1;
}

function getPitch() {
  pitch.getPitch(function (err, frequency) {
    if (frequency) {
      draw({
        ctx,
        frequency,
      });
      ctx.globalCompositeOperation = "destination-atop"; // sunny UNDER rainy
      document.querySelector("#result").textContent = frequency;
    } else {
      document.querySelector("#result").textContent = "No pitch detected";
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
