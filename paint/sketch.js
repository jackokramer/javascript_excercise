let w = 5; let h = w*2
let cols; let rows

let num= 5;

let blocks =[]

let colors;

let grid = []

function setup() {
    createCanvas(400, 400);
    cols = width/w
    rows = height/h

    num = floor(random(3,6))

colors = [color(255,240,1), color(255,1,1), color(1,1,253), color(249)]


for(let i=0; i<10; i++){
    print(colors[i%colors.length])
}

for(let i=0; i<num; i++){
    blocks[i]= new Block(colors[i%colors.length])
}

for(let x = 0; x<cols; x++){
    grid[x]=[]
    for(let y = 0; y<rows; y++){
        grid[x][y] = new Cell(x*w, y*h, w,h,y)
    }
}
}


  function draw() {
    background(220)
    for(let x = 0; x<cols; x++){
        for(let y = 0; y<rows; y++){
            stroke(255)
            strokeWeight(0.5)
            grid[x][y] = displayCell()
        }
    }
    for(let i=0; i<num; i++){
        blocks[i].displayCell()
    }

    // for(let i =colRange.x; i<colRange.y;i++){
    // for(let j=rowRange.x; j<rowRange.y; j++){
    //         grid[i][j].display()
    //     }
    // }

  }

  function rnadomLength(length){
    let a
    let b
    do{
         a = floor(random(0,length))
         b = floor(random(0,length))
    } while(abs(a-b)==0);


    let range = createVector(min(a,b), max(a,b))
    return range
  }