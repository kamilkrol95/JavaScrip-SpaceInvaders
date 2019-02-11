function Bullet(x, y) {
	this.x = x;
	this.y = y;
	this.dd = false;
	
	this.show = function() {
		stroke(255,140,0);
		strokeWeight(3);
		line(this.x, this.y, this.x, this.y+10);
	}

	this.move = function() {
		this.y += -5;

	}

	this.dead = function() {
		this.x -= 1000;
		this.dd = true;
	}

	this.hit = function(alien) {
		var d = dist(this.x, this.y, alien.x, alien.y);
		if (d < alien.r) {
			return true;
		} else{
			return false;
		}
	}
}