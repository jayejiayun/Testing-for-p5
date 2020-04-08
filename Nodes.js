//let distances = [];


let linesX = 40;
let linesY = 26;
//----------------------------------
let autopilot = false
//----------------------------------
let coef = 1;
let mode = 0;
//----------------------------------
let stepsX, stepsY, radius, intensity, movement, last_sum, scale, factor, wave, sum;
//----------------------------------
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
//----------------------------------
let Nodes = Array.from(Array(linesX), () => new Array(linesY))
//----------------------------------
function setup()
{
  
  let distance = createVector(0,0);
  createCanvas(800, 600);

  
//   let stepsX = width / 40;
//   let stepsY = height / 26;
//   for (let x = 0; x  < linesX; x++)
// {
//    for (let y = 0; y  < linesY; y++)
//    {
//      Nodes = new Node((x + 0.5) * stepsX, (y + 0.5) * stepsY, 2);
//    }
//  }
//    console.log(Nodes);
}
//----------------------------------
function draw(){
  // background(frameCount%255, 255, 30);
  let distance = createVector(0,0);
  let stepsX = width / 40;
  let stepsY = height / 26;
  for (let x = 0; x  < linesX; x++)
{
   for (let y = 0; y  < linesY; y++)
   {
     Nodes = new Node((x + 0.5) * stepsX, (y + 0.5) * stepsY, 2);
   }
 }
   console.log(Nodes);
  //let Nodes = createVector(0,0);
 
  // let Nodes =[];
  for (let k = 0; k < 40; k++)
  {
    // Nodes[k] = [];
    
    for (let j = 0; j < 26; j++)
    {
      if (autopilot)
      {

      }
      else
      {
let distance = createVector((Nodes.xpos - mouseX), (Nodes.ypos - mouseY));
      }

//-------------------------------

//---------------------------------
if (radius > 50)
    {
     radius = 50;
     }
       if (radius < 2)
     {
        radius = 2;
      }
//----------------------------------
 if (mode == 0)
   {
ellipse(Nodes.xpos + coef * (distance.x * scale), Nodes.ypos + coef * (distance.y * scale), radius, radius);
}
if (mode == 1)
   {
   strokeWeight(radius / 3);
   strokeCap(PROJECT);
       line(Nodes.xpos + coef * (distance.x * scale), Nodes.ypos + coef * (distance.y * scale), Nodes.xpos, Nodes.ypos);
     }
      
    }
  }
}
