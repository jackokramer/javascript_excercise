let x; let y; let angle = 0;
let radius = 150
let shiftAngle = []
let numAxis = 10

let x2 = []
let y2 =[]

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
  for(let x = 0; x<numAxis; x++){
    shiftAngle[x] = x*90/numAxis
  }
}

function draw() {
  background(79,148,167);
  stroke(255,100)
  //angle= map(mouseX, 0, width, 0, 360)
  x = radius*cos(angle);
  y = radius*sin(angle);
//   x2= radius*cos(angle + shiftAngle)
//   y2= radius*sin(angle + shiftAngle)

  translate(width/2, height/2)
  noFill()
  ellipse(0, 0, radius*2, radius*2)
  fill(0)
  ellipse(x, y, 20, 20)

  for(let t= 0; t<numAxis; t++){
      x2[t]= radius*cos(angle+shiftAngle[t])
  y2[t]= radius*sin(angle + shiftAngle[t])
  push()
  rotate(-shiftAngle[t])
  //stroke(0,0,255)
  line(-radius, 0, radius, 0)
  //stroke(0,255,0)
  line(0, -radius, 0, radius)
  fill(255)
  ellipse(x2[t], 0, 20, 20)
  ellipse(0, y2[t], 20, 20)
  pop()
  }
  angle +=1
}