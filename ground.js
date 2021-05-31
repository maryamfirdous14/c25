class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,	
			density:0.5		
			}
		
		this.body=Bodies.rectangle(x, y, w, h , options);
		
		this.width=w
		this.height=h
 		World.add(myworld, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

		
			rectMode(CENTER)
			strokeWeight(4);
			fill("darkgreen")
			rect(pos.x,pos.y,this.width, this.height);
			
			
	}

}