class Block{
  constructor(x,y){
    this.x= x;
    this.y= y;
    this.angle = 0;
    this.colorr= 70;
  }
  display(){
  noFill();
  stroke(this.colorr);
  push();
  translate(this.x, this.y);
  rotate(this.angle);
    if(this.angle>0 && this.angle<45){
      this.drawRect()
    } else {
      this.drawX()
    }
  this.drawX()
  pop();
  }
  move(){
    //if the mouse is moving check distance between mouse locarion and center
    let distance;
    if(pmouseX - mouseX != 0 || pmouseY - mouseY !=0){
     distance = dist(mouseX, mouseY, this.x, this.y);
  if(distance < distMouse){
      this.angle+=1;
    this.colorr=255;
  }
    }
    // if squares are moving move them till 90 degrees
    if(this.angle>0 && this.angle < 90){
      this.angle+=1;
      if(this.colorr > 70){
        this.colorr-=3;
      }
    } else {
      this.angle = 0;
      this.colorr = 70;
    }
  }
  drawRect(){
  rect(0, 0, size - offset,size-offset);
  }
  drawX(){
      let margin = -size/2;
  line(margin + offset/2,margin + offset/2, margin+size-offset/2, margin+size-offset/2);
    line(margin+size -offset/2, margin + offset/2, margin + offset/2, margin+size-offset/2)
  }
}