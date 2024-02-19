let distMouse = 15;
let b;
let cols= 100
let rows= 100
let blocks=[];
let size = 10;
let offset = 4;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;
  for(let x = 0; x< cols; x++){
    blocks[x]=[]
    for(let j = 0; j<rows; j++){
      blocks[x][j] = new Block(size/2 + x*size, size/2+j*size);
    }
  }
  b = new Block(width/2, height/2)
}

function draw() {
  background(0);
   for(let x = 0; x< cols; x++){
    for(let j = 0; j<rows; j++){
      blocks[x][j].move();
      blocks[x][j].display()
    }
  }
  print(pmouseX, mouseX, pmouseY, mouseY)
}