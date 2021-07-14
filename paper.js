
class paper
{
    constructor(x,y,r)
    {
       var options={
    restituition:0.3,
    density:1.2,
    friction : 0,
    isStatic:false,

       }

    this.x = x;
    this.y = y; 
    this.r = r;
    this.image=loadImage("paper.png")
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    World.add(world, this.body);
    
    }

     display(){ 

    var paperPos = this.body.position;
    push();
    translate(paperPos.x,paperPos.y);
    imageMode(CENTER)
	fill("blue");
    image(this.image,0,0,this.r, this.r);
    pop()

     }

}