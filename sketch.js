var ship;
var aliens = [];
var bullets = [];
var amount = 15;
var a1 = 15;
var textarea;
var score = 0;
var level = 1;

function setup() {
	createCanvas(600,500);
	ship = new Ship(width/2,height -20);
	textarea = new Textarea();
	for (var i = 0; i < amount; i++) {
		aliens[i] = new Alien((i+1)*random(20,35), random(-30,-200));
	}

}

function draw() {
	background(51);
	fill(255,0,255, 100);
  	
  	ship.show();
  	ship.move();  	
  	for (var i = 0; i < aliens.length; i++) {
		if (!aliens[i].dd){
		aliens[i].show();
		aliens[i].move();
		}
		if (aliens[i].y > height - aliens[i].r && !(aliens[i].dd)){
			textarea.gOver();
			for( i=0 ; i<aliens.length; i++) {
				aliens[i].dead();
			}
			textarea.gOver();
		}
	}
	for (var i = 0; i < bullets.length; i++) {
		if (!bullets[i].dd){
		bullets[i].show();
		bullets[i].move();
		}
		for (var j =0; j < aliens.length; j++) {
			if (bullets[i].hit(aliens[j])){
				aliens[j].dead();
				bullets[i].dead();
				score++;
			}
		}
	}
	textarea.show();
	textarea.Score(score);
	textarea.level(level);
	//console.log(a1);

	if (score == a1) {
		level++
		textarea.newLevel();
		
		amount = floor(amount*level*0.5);
		a1 += amount;
		setTimeout(function(){
    	for (var i = 0; i < amount; i++) {
			for (var j = 0; j < 15; j++) {
			aliens[i] = new Alien((j+1)*random(20,35), floor(level*1.2*random(-30,-200)));}	
		}	
		}, 3000);
		
	}
	if (score == 206) {
		textarea.win();
	}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		ship.setDir(-1);
	} else if(keyCode == RIGHT_ARROW) {
		ship.setDir(1);
	} else if(keyCode == UP_ARROW) {
		ship.setDiry(-1);
	} else if(keyCode == DOWN_ARROW) {
		ship.setDiry(1);		
	}else 
	if (key === ' ') {
		var bullet = new Bullet(ship.x + ship.a/2, ship.y + ship.a/2);
		bullets.push(bullet);
	}
	
}
function keyReleased() {
	if(key != ' '){
	if (!(keyCode==LEFT_ARROW || keyCode==RIGHT_ARROW || keyCode==UP_ARROW || keyCode==DOWN_ARROW)){
		ship.setDir(0);
		ship.setDiry(0);
	}
	if (keyCode==LEFT_ARROW || keyCode==RIGHT_ARROW){
		ship.setDir(0);
	}
	if (keyCode==UP_ARROW || keyCode==DOWN_ARROW) {
		ship.setDiry(0);
	}
	}	

}

