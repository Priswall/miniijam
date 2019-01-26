function Platform(x, y, w, h) {
	gameObject.call(this, x, y, "platform", null);
	this.size = new Vector(w, h);

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
script.src = "MovingPlatform.js";
document.body.appendChild(script);
