class Box {
 constructor(x,y,width,height) {
 
    var options = {
   restitution: 1,
   friction : 1.5,
   density : 5
 }

this.body = Bodies.rectangle(x,y,width,height)
this.width = width;
this.height = height;


World.add(world,this.body);

 }

 display() {
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rectMode(CENTER);
fill("red");
rect(0,0,this.width,this.hight)
pop();

 }
}