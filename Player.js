function Player(x, y) {
	gameObject.call(this, x, y, "player", null);
	this.vel = new Vector(0, 0);
	this.acc = 0.5;
	this.isSinging = false;
	this.canJump = false;

	this.update = function() {
		var left = false,
			right = false,
			up = false;

		if((keys[65] || keys[37]) && !right) left = true;
		if((keys[68] || keys[39]) && !left) right = true;
		if(keys[87] || keys[38]) {
			up = true;
			if(this.canJump) this.vel.y = -7.5;
			this.canJump = false;
		}
		if(keys[32] || keys[13]) this.isSinging = true;
		else this.isSinging = false;

		if(left) this.vel.x -= this.acc;
		if(right) this.vel.x += this.acc;
		if(!right && !left) {
			if(this.vel.x < -this.acc) this.vel.x += this.acc;
			else if (this.vel.x > this.acc) this.vel.x -= this.acc;
			else this.vel.x = 0;
		}
		this.vel.y += this.acc / 2;
		if(this.vel.y > 10) this.vel.y = 10;

		if(this.vel.x > 5) this.vel.x = 5;
		if(this.vel.x < -5) this.vel.x = -5;

		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
	};

	this.draw = function() {
		c.fillStyle = "rgb(150, 150, 255)";
		if(this.isSinging)
			c.fillStyle = "rgb(150, 255, 255)";
		c.fillRect(this.pos.x - 15, this.pos.y - 15, 30, 30);
	};
}
var player = new Player(canvas.width / 2, canvas.height / 2);

var script = document.createElement("script");
script.src = "Platform.js";
document.body.appendChild(script);
