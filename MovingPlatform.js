function movingPlatform(x, y, w, h, dx, dy, moveType) {
	gameObject.call(this, x, y, "movingplatform", null);
	this.size = new Vector(w, h);
	this.destination = new Vector(dx, dy);
	this.ogpos = new Vector(x, y);
	this.distance = new Vector((this.ogpos.x - this.destination.x) / 25, (this.ogpos.y - this.destination.y) / 25);
	this.moveType = moveType;
	this.vel = new Vector(0, 0);

	this.move = function() {
		if(moveType == "sin") {
			this.vel.x = Math.sin(frames / 50) * this.distance.x;
			this.vel.y = Math.sin(frames / 50) * this.distance.y;
		}
		this.pos.x -= this.vel.x;
		this.pos.y -= this.vel.y;
	}

	this.update = function() {
		if(player.pos.x + 15 > this.pos.x &&
		   player.pos.x + 15 < this.pos.x + (this.size.x / 2) &&
		   player.pos.y + 15 > this.pos.y + player.vel.y &&
		   player.pos.y - 15 < this.pos.y + this.size.y) {
			player.vel.x = 0;
			player.pos.x = this.pos.x - 15;
		}
		if(player.pos.x - 15 > this.pos.x + this.size.x - (this.size.x / 2) &&
		   player.pos.x - 15 < this.pos.x + this.size.x &&
		   player.pos.y + 15 > this.pos.y + player.vel.y &&
		   player.pos.y - 15 < this.pos.y + this.size.y) {
			player.vel.x = 0;
			player.pos.x = this.pos.x + this.size.x + 15;
		}
		if(player.pos.x + 15 > this.pos.x &&
		   player.pos.x - 15 < this.pos.x + this.size.x &&
		   player.pos.y + 15 < this.pos.y + (this.size.y / 2) &&
		   player.pos.y + 15 > this.pos.y) {
			player.vel.y = 0;
			player.pos.y = this.pos.y - 15;
			player.pos.x -= this.vel.x;
			player.canJump = true;
		}
		if(player.pos.x + 15 > this.pos.x &&
		   player.pos.x - 15 < this.pos.x + this.size.x &&
		   player.pos.y - 15 < this.pos.y + this.size.y &&
		   player.pos.y - 15 > this.pos.y + this.size.y - (this.size.y / 2)) {
			player.vel.y = 0;
			player.pos.y = this.pos.y + this.size.y + 15;
		}
	}

	this.draw = function() {
		c.fillStyle = "black";
		c.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
	}
}

var script = document.createElement("script");
script.src = "SingingPlatform.js";
document.body.appendChild(script);
