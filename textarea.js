function Textarea() {

	this.w = 150;
	this.h = 50;
	this.x = width - (this.w + 5);
	this.y = 5;
	this.show = function() {
		noStroke();
		fill(200,200,200);
		rect(this.x , this.y, this.w, this.h);
	}
	
	this.level = function(x) {
		textSize(20);
		fill(30);
		text('Level: ' + x , this.x + 10, this.y + 22);
	}

	this.newLevel = function() {
		textSize(60);
		fill(0, 255, 0);
		text('NEXT LEVEL' , 120, height/2);
	}

	this.Score = function(x) {
		textSize(18);
		fill(30);
		text('Score: ' + x , this.x + 10, this.y + 43);
	}

	this.win = function(x) {
		textSize(70);
		fill(255, 215,0);
		text('YOU WIN!!' , 100, height/2);
		text('Score: '+ x, 100, height/2 + 90);
	}

	this.gOver = function() {
		textSize(70);
		fill(255, 10, 0);
		text('GAME OVER!!' , 80, height/2);
	}

}