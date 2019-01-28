function Player(x, y) {
	gameObject.call(this, x, y, "player", null);
	this.vel = new Vector(0, 0);
	this.acc = 0.2;
	this.isSinging = false;
	this.isCrying = false;
	this.canJump = false;

	this.update = function() {
		var left = false,
			right = false,
			up = false;

		if((keys[65] || keys[37]) && !right) left = true;
		if((keys[68] || keys[39]) && !left) right = true;
		if(keys[87] || keys[38]) {
			up = true;
			if(this.canJump) this.vel.y = -5.75;
			this.canJump = false;
		}
		if(keys[32] || keys[13]) {
			this.isSinging = true;
			singing.play();
		}
		else {
			this.isSinging = false;
			singing.pause();
			singing.currentTime = 0.1;
		}

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
		c.save();
		if(this.vel.x > 0) {
			c.translate(this.pos.x + 45, this.pos.y - 95);
			c.scale(-1, 1);
		}
		else c.translate(this.pos.x - 45, this.pos.y - 95);
		if(this.isSinging && !this.iscrying)
			c.drawImage(owo2, 0, Math.sin(frames / 30) * 3, 90, 90);
		else if(!this.isSinging && !this.iscrying)
			c.drawImage(owo, 0, Math.sin(frames / 30) * 3, 90, 90);
		else
			c.drawImage(owocrying, 0, Math.sin(frames / 30) * 3, 90, 90);
		c.restore();
		c.save();
		if(this.vel.x > 0) c.translate(this.pos.x - 15, this.pos.y - (40 - (Math.sin(frames / 30) * 3)));
		else c.translate(this.pos.x - 15, this.pos.y - (40 - (Math.sin(frames / 30) * 3)));

		c.rotate((Math.sin(frames / 5) * 10) * (Math.PI / 180));
		if(this.vel.x > 0) c.drawImage(owowing, -15, -10, 15, 10);
		else c.drawImage(owowing, -15, -5, 15, 10);
		c.restore();

		c.save();
		if(this.vel.x > 0) c.translate(this.pos.x + 15, this.pos.y - (35 - (Math.sin(frames / 30) * 3)));
		else c.translate(this.pos.x + 15, this.pos.y - (45 - (Math.sin(frames / 30) * 3)));

		c.scale(-1, 1);
		c.rotate((Math.sin(frames / 5) * 10) * (Math.PI / 180));
		if(this.vel.x > 0) c.drawImage(owowing, 0, -10, -15, 10);
		else c.drawImage(owowing, 0, -5, -15, 10);
		c.restore();
	};
}
var player = new Player(canvas.width / 2, canvas.height / 2);

var script = document.createElement("script");
script.src = "NPC.js";
document.body.appendChild(script);
