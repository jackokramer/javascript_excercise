let flowers = []
let num = 15
function setup() {
    createCanvas(1200, 1200);
    angleMode(DEGREES)
    for(let i = 0; i<num; i++){
        if(i%2==0){
        flowers[i] = new Flower(150- i *10, 100, 15, 7, (i+1)*0.1)
    } else{
        flowers[i] = new Flower(150- i *10, 100, 15, 7, (i+1)*-0.1)

    }
    }
  }

  function draw() {
    background(0);
    translate(width/2, height/2);
    for(let i = 0; i<num; i++){
    flowers[i].display()
    }

    // stroke(0)
    // beginShape();
    // for(let i = 0; i<pts; i++){
    //     let angle  = i/pts*360
    //     f_radius = 10*cos(angle)
    //     x[i]= (r)*cos(angle)
    //     y[i]= (r)*sin(angle)
    //     vertex(x[i], y[i]);
    // }
    // endShape(CLOSE)
    // ellipse(0,0,10,10)
  }