class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		
		this.width=w;
		this.height=h;
		this.image=loadImage("dustbingreen.png")
		this.body=Bodies.rectangle(x, y, w, h,options);
 		World.add(myworld, this.body);
	
	}
	display()
	{
			
			var pos=this.body.position;		

			noStroke()
			fill("darkorange")
			imageMode(CENTER)
			image(this.image,pos.x,375,250,190);
			
			
	}

}