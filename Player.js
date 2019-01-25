function Player(x, y) {
	gameObject.call(this, x, y, "player", null);
	this.vel = new Vector(0, 0);
	this.acc = 0.2;
	this.isSinging = false;
	
	this.update = function() {
		var left = false,
			right = false,
			up = false,
			down = false;
		
		if((keys[65] || keys[37]) && !right) left = true;
		if((keys[68] || keys[39]) && !left) right = true;
		if((keys[83] || keys[40]) && !up) down = true;
		if((keys[87] || keys[38]) && !down) up = true;
		if(keys[32] || keys[13]) this.isSinging = true;
		else this.isSinging = false;
		
		if(up) this.vel.y -= this.acc;
		if(down) this.vel.y += this.acc;
		if(left) this.vel.x -= this.acc;
		if(right) this.vel.x += this.acc;
		if(!right && !left) {
			if(this.vel.x < -0.1) this.vel.x += 0.1;
			else if (this.vel.x > 0.1) this.vel.x -= 0.1;
			else this.vel.x = 0;
		}
		if(!up && !down) {
			if(this.vel.y < -0.1) this.vel.y += 0.1;
			else if (this.vel.y > 0.1) this.vel.y -= 0.1;
			else this.vel.y = 0;
		}
		
		if(this.vel.x > 5) this.vel.x = 5;
		if(this.vel.x < -5) this.vel.x = -5;
		if(this.vel.y > 5) this.vel.y = 5;
		if(this.vel.y < -5) this.vel.y = -5;
		
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
	};
	
	this.draw = function() {
		c.fillStyle = "rgb(150, 150, 255)";
		if(this.isSinging)
			c.fillStyle = "rgb(150, 255, 255)";
		c.fillRect(this.pos.x - 30, this.pos.y - 30, 60, 60);
	};
}
var player = new Player(canvas.width / 2, canvas.height / 2);

var script = document.createElement("script");
script.src = "Platform.js";
document.body.appendChild(script);