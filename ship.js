function Ship(x, y) {
	this.x = x;
	this.y = y;
	this.a = 25;
	this.xdir = 0;
	this.ydir = 0;

	this.show = function() {
		noStroke();
		fill(135,206,235);
		rect(this.x, this.y, this.a, this.a);
	}
	this.setDir = function(xdir) {
		this.xdir = xdir;
			}

	this.setDiry = function(ydir) {
		this.ydir = ydir;

	}
	
	this.move = function() {
		if(this.x <0){
			this.x = 0;
		} else {
		this.x += this.xdir*3;
		}
		if(this.x >= width - this.a){
			this.x = width - this.a;
		} else {
		this.x += this.xdir*3;
		}
		if(this.y <0){
			this.y = 0;
		} else {
		this.y += this.ydir*3;
		}
		if(this.y >= height - this.a){
			this.y = height - this.a;
		} else {
		this.y += this.ydir*3;
		}
	}
	
}