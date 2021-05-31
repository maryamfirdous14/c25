class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		
		
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(x,y,r/2, options)
					

		World.add(myworld, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			var angle= this.body.angle;
			
			push()
			translate(pos.x, pos.y);
			rotate(angle)
			fill("yellow")
			imageMode(CENTER)
			image(this.image,0,0,this.r+30, this.r+30);
			pop()
			
	}

}
