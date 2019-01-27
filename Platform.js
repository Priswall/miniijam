function Platform(x, y, w, h) {
	gameObject.call(this, x, y, "platform", null);
	this.size = new Vector(w, h);

	this.update = function() {
		if(player.pos.x + 35 > this.pos.x &&
		   player.pos.x + 35 < this.pos.x + (this.size.x / 2) &&
		   player.pos.y > this.pos.y + player.vel.y + 1 &&
		   player.pos.y - 80 < this.pos.y + this.size.y + player.vel.y - 1) {
			player.vel.x = 0;
			player.pos.x = this.pos.x - 35;
		}
		if(player.pos.x - 35 > this.pos.x + (this.size.x / 2) &&
		   player.pos.x - 35 < this.pos.x + this.size.x &&
		   player.pos.y > this.pos.y + player.vel.y + 1 &&
		   player.pos.y - 80 < this.pos.y + this.size.y + player.vel.y - 1) {
			player.vel.x = 0;
			player.pos.x = this.pos.x + this.size.x + 35;
		}
		if(player.pos.x + 35 > this.pos.x &&
		   player.pos.x - 35 < this.pos.x + this.size.x &&
		   player.pos.y < this.pos.y + (this.size.y / 2) &&
		   player.pos.y > this.pos.y) {
			player.vel.y = 0;
			player.pos.y = this.pos.y;
			player.canJump = true;
		}
		if(player.pos.x + 35 > this.pos.x &&
		   player.pos.x - 35 < this.pos.x + this.size.x &&
		   player.pos.y - 80 < this.pos.y + this.size.y &&
		   player.pos.y - 80 > this.pos.y + (this.size.y / 2)) {
			player.vel.y = 0;
			player.pos.y = this.pos.y + 80 + this.size.y;
		}
	}

	this.draw = function() {
		c.fillStyle = "rgb(145, 145, 145)";
		c.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
		for(var i = 0; i < this.size.x; i += 25) {
			c.drawImage(grass, this.pos.x + i, this.pos.y);
			if(i + 25 > this.size.x) {
				c.drawImage(grass, 0, 0, this.size.x - i, 25, this.pos.x + i, this.pos.y, 25, 25);
			}
		}
	}
}

var script = document.createElement("script");
script.src = "MovingPlatform.js";
document.body.appendChild(script);
