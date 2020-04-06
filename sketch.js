//----------------------------------------
let mic;
let fft;
//----------------------------------------

//----------------------------------------
let lerping = true;
console.log(lerping);
//----------------------------------------

//----------------------------------------
let repel = true
let autopilot = false
let controls = true
let voice = false

//----------------------------------------
let coef = 1;
let mode = 0;
let magnitude = 0;
let maxMagnitude = 848.5281374;
//----------------------------------------
let c = color([0],[0],[0]);
//console.log(typeof c);
//let distance = createVector(0,0);

//
let sourcecode
let stepsX, stepsY, radius, intensity, movement, last_sum, scale, factor, wave, sum;
//----------------------------------------
class Node
{
  constructor(x, y, s)
  {
    this.anchorx = x;
    this.anchory = y;
    this.ypos = y;
    this.xpos = x;
    this.speed = s;
  }
}
//----------------------------------------

let Nodes = Array.from(Array(linesX), () => new Array(linesY))
// for (let x = 0; x  < linesX; x++)
// {
//   for (let y = 0; y  < linesY; y++)
//   {
//     Nodes = new Node((i + 0.5) * stepsX, (j + 0.5) * stepsY, 2);
//   }
// }
//----------------------------------------
let index = 0;
// function input()
// {
//   textAlign(LEFT);
//   console.log("input success");
// }
//----------------------------------------
function setup()
{
  let cnv = createCanvas(800, 600);
  fft = new p5.FFT();
  mic = new p5.AudioIn();
  mic.start();
  fft.setInput(mic)
  //fullScreen();
  //noSmooth();
  colorMode(HSB, 255);
  let linesX = 40;
  let linesY = 26;

 
  // input();
  console.log("setup success");
}
//----------------------------------------
function draw()
{
  background(frameCount % 255, 255, 30);
  stroke(0);
  let r = 120;
  let g = 120;
  let b = 120;
  console.log("draw success");
  //stepsX = width / 40;
  //stepsY = height / 26;
  
  let a = 0;
  let angle = (2 * PI) / 100;
  let waveform = fft.waveform();
  let step = floor(waveform.length / 100);
  
 // for (let i = 0; i < linesX; i++)
 //  {
 //    for (let j = 0; j < linesY; j++)
 //    {
 //      Nodes[i][j] = new Node((i + 0.5) * stepsX, (j + 0.5) * stepsY,2);
 //    }
 //  }

  for (let i = 0; i < waveform.length - step; i += step) {
    let x1 = (width / 2) + cos(a) * (width/2 * (waveform[i] + 1) / 2);

    let y1 = height / 2 + sin(a) * (width/2 * (waveform[i] + 1) / 2);
    let x2 = width / 2 + cos(a + angle) * (width/2 * (waveform[i + step] + 1) / 2);
    let y2 = height / 2 + sin(a + angle) * (width/2 * (waveform[i + step] + 1) / 2);
    stroke(34, 225, 273);
    strokeWeight(3);
    line(x1, y1, x2, y2);
    a += angle;
    if (i < 300)
    {
      r += 255;
    }
    if (i >= 300 && i < 600)
    {
      g += 255;
    }
    if (i >= 600)
    {
      b += 255;
    }
  
  }

  // coef = (repel ? 1 : -1);
  // if (lerping)
  // {
  //   magnitude = lerp(sum, last_sum, 0.7) / 2.5;
  // }
  // else
  // {
  //   magnitude = last_sum;
  // }
  // wave = last_sum / 2.5;

//   for (int k = 0; k < linesX; k++)
//   {
//     for (int j = 0; j < linesY; j++)
//     {
//       if (autopilot)
//       {

//       }
//       else
//       {
//         distance = new PVector(Nodes[k][j].xpos - mouseX, Nodes[k][j].ypos - mouseY);
//       }
//       scale = (1 / mag((Nodes[k][j].xpos - mouseX),(Nodes[k][j].ypos - mouseY))) * magnitude;


      
      //fill(255);
  //     intensity = pow(1 - distance.mag() / (maxMagnitude), 5) / 5;
  //     radius = (intensity * magnitude);
  //     Nodes[k][j].xpos += coef * (distance.x * scale) / 25;
  //     Nodes[k][j].ypos += coef * (distance.y * scale) / 25;
  //     Nodes[k][j].xpos = lerp(Nodes[k][j].xpos, Nodes[k][j].anchorx, 0.05);
  //     Nodes[k][j].ypos = lerp(Nodes[k][j].ypos, Nodes[k][j].anchory, 0.05);
  //     if (radius > 50)
  //     {
  //       radius = 50;
  //     }
  //     if (radius < 2)
  //     {
  //       radius = 2;
  //     }
  // c = color(170 + magnitude / 2, magnitude * 5, 255, 255);
  //     fill(c);
  //     stroke(c);
  //     if (mode == 0)
  //     {
  //       ellipse(Nodes[k][j].xpos + coef * (distance.x * scale), Nodes[k][j].ypos + coef * (distance.y * scale), radius, radius);
  //     }
  //     if (mode == 1)
  //     {
  //       strokeWeight(radius / 3);
  //       strokeCap(PROJECT);
  //       line(Nodes[k][j].xpos + coef * (distance.x * scale), Nodes[k][j].ypos + coef * (distance.y * scale), Nodes[k][j].xpos, Nodes[k][j].ypos);
  //     }
  //   }
    
  //}


    //sum = 0;
  // for (let i = 0; i < floor.waveform() - 1; i++)
  // {
  //   if (voice)
  //   {
  //     line(i * factor, height / 2 + floor.left.get(i) * last_sum + 2, i * factor + 1, height / 2 + floor.left.get(i + 1) * last_sum + 2);
  //     sum += abs(floor.left.get(i));
  //   }
  //   else
  //   {
  //     line(i * factor, height / 2 + floor.left.get(i) * last_sum + 2, i * factor + 1, height / 2 + floor.left.get(i + 1) * last_sum + 2);
  //     sum += abs(floor.left.get(i));
  //   }
  // }
  //last_sum = sum;

//----------------------------------------

}
