function App({$play, $canvas, $audio}){
  const state = {
    play: false,
  }
  const context = new AudioContext();
  const src = context.createMediaElementSource($audio);
  const analyser = context.createAnalyser();
  analyser.fftSize = 32;
  analyser.connect(context.destination);
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  src.connect(analyser);

  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  const WIDTH = $canvas.width;
  const HEIGHT = $canvas.height;
  const centerX = (WIDTH / 2);
  const centerY = (HEIGHT/ 2);
  
  let radius;
  let x = 0;
  
  const renderFrame = () => {
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for(let i = 0; i< bufferLength; i++){
      radius = dataArray[i * 3] ;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, radius, false);
      ctx.fill();
      ctx.lineWidth = 1;
      const r = 250;
      const g = radius + (25 * (i/bufferLength))
      const b = 250 * (i/bufferLength);
      
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.strokeStyle = `rgb(${r},${g},${b})`;
      ctx.stroke();
    }
    if(state.play){
      window.requestAnimationFrame(renderFrame)
      $audio.play();
      $play.style.color="white";
    }else{     
      window.cancelAnimationFrame(renderFrame);
      $audio.pause();
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      $play.style.color = "black";
    }
  };

  // let myReq;
  const playMusic = () =>{
    state.play = !state.play;
    if(state.play){
      window.requestAnimationFrame(renderFrame)
    }
  }

  $play.addEventListener("click", playMusic)
};

export default App;