class Ball {
	constructor(x, y, vx, vy, radius, r, g, b, name) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
		this.col = false;
		this.name = name;
	
   }
   drawBall() {
	  
		
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);

		//if(this.col == true) {
			console.log(this.name, this.col);
		//}
		
	} 
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}


