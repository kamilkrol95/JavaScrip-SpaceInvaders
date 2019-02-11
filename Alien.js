function Alien(x, y) {
	this.x = x;
	this.y = y;
	this.r = 15;
	this.dd = false;
	
	this.show = function() {
		noStroke();
		fill(47,79,79);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.dead = function() {
		this.x += 1000;
		this.dd = true;
	}
	
	this.move = function() {
		this.y += level*0.3;
	}	
}