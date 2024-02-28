class Box{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.isLetter = false
        this.angle = 0;
        this.depth = 0
    };

    display(){
        stroke(255, 100)
        noFill()
        // let x = map(mouseX, 0, width, 0,360)
        if(this.isLetter === true){
            fill(0,0,255)
            this.angle +=1
            this.depth +=5*sin(this.angle)
        } else{
            fill(255);
            this.angle =-1
        }
        fill(255)
        let z = map(mouseX, 0, width, 0, 100)
        push();
        //translate(size/2+i*size-size*cols/2, size/2+j*size-size*rows/2);
        translate(this.x, this.y, this.depth)
        rotateX(this.angle)
        rotateY(this.angle)
        box(size-1/3*size);
        pop();
    }
}