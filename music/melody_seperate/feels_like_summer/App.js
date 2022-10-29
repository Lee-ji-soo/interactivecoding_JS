function App({ $container, $play, $canvas, $audio }) {
  const state = {
    play: false,
  };

  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  const WIDTH = $canvas.width;
  const HEIGHT = $canvas.height;

  const context = new (window.AudioContext || window.webkitAudioContext)();
  let audioSource = null;
  let analyser = null;

  audioSource = context.createMediaElementSource($audio);
  analyser = context.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(context.destination);

  analyser.fftSize = 128; //더 높을 수록 data를 더 많이 가져옴.
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const barWidth = WIDTH / bufferLength;

  let x = 0;
  let myReq;
  const renderFrame = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    analyser.getByteFrequencyData(dataArray);
    console.log({ dataArray });
    drawVisualizer({
      bufferLength,
      dataArray,
      barWidth,
    });
    // ctx.fillStyle = "rgb(200, 200, 200)";
    // ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // ctx.lineWidth = 2;
    // ctx.strokeStyle = "rgb(0, 0, 0)";

    // ctx.beginPath();

    // const sliceWidth = (WIDTH * 1.0) / bufferLength;
    // let x = 0;

    // for (let i = 0; i < bufferLength; i++) {
    //   const v = dataArray[i] / 128.0;
    //   const y = (v * HEIGHT) / 2;

    //   if (i === 0) {
    //     ctx.moveTo(x, y);
    //   } else {
    //     ctx.lineTo(x, y);
    //   }

    //   x += sliceWidth;
    // }

    // ctx.lineTo(canvas.width, canvas.height / 2);
    // ctx.stroke();

    myReq = requestAnimationFrame(renderFrame);
  };

  const drawVisualizer = ({ bufferLength, dataArray, barWidth }) => {
    let barHeight;
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
      // const red = (i * barHeight) / 10;
      // const green = i * 4;
      // const blue = barHeight / 4 - 12;
      const color = (i * barHeight) / 10;
      if (barHeight === i + 200) {
        ctx.fillStyle = "red";
        ctx.fillRect(i * 10, i * barHeight, barWidth, 20);
      }
      // 오른쪽
      // ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      // ctx.fillRect(WIDTH / 2 + x, HEIGHT - barHeight, barWidth, barHeight); // this will continue moving from left to right
      // x += barWidth; // increases the x value by the width of the bar
    }
  };

  // let myReq;
  const playMusic = () => {
    state.play = !state.play;
    if (state.play) {
      renderFrame();
      $audio.play();
    } else {
      $audio.pause();
      window.cancelAnimationFrame(myReq);
    }
  };

  $play.addEventListener("click", playMusic);
}

export default App;
