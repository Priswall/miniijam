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
		if(player.pos.x + 30 > this.pos.x &&
		   player.pos.x + 30 < this.pos.x + 6 &&
		   player.pos.y + 30 > this.pos.y - player.vel.x &&
		   player.pos.y - 30 < this.pos.y + this.size.y + player.vel.x) {
			player.vel.x = 0;
			player.pos.x = this.pos.x - 30 - this.vel.x;
		}
		if(player.pos.x - 30 > this.pos.x + this.size.x - 6 &&
		   player.pos.x - 30 < this.pos.x + this.size.x &&
		   player.pos.y + 30 > this.pos.y + player.vel.x &&
		   player.pos.y - 30 < this.pos.y + this.size.y - player.vel.x) {
			player.vel.x = 0;
			player.pos.x = this.pos.x + this.size.x + 30 - this.vel.x;
		}
		if(player.pos.x + 30 > this.pos.x &&
		   player.pos.x - 30 < this.pos.x + this.size.x &&
		   player.pos.y + 30 < this.pos.y + 6 &&
		   player.pos.y + 30 > this.pos.y) {
			player.vel.y = 0;
			player.pos.y = this.pos.y - 30 - this.vel.y;
		}
		if(player.pos.x + 30 > this.pos.x &&
		   player.pos.x - 30 < this.pos.x + this.size.x &&
		   player.pos.y - 30 < this.pos.y + this.size.y &&
		   player.pos.y - 30 > this.pos.y + this.size.y - 6) {
			player.vel.y = 0;
			player.pos.y = this.pos.y + this.size.y + 30 - this.vel.y;
		}
	}
	
	this.draw = function() {
		c.fillStyle = "black";
		c.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
	}
}
platforms.push(new movingPlatform(100, 100, 20, 100, 200, 200, "sin"));

var script = document.createElement("script");
script.src = "Draw.js";
document.body.appendChild(script);