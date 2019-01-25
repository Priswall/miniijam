function Platform(x, y, w, h) {
	gameObject.call(this, x, y, "platform", null);
	this.size = new Vector(w, h);
	
	this.update = function() {
		if(player.pos.x + 30 > this.pos.x &&
		   player.pos.x + 30 < this.pos.x + 6 &&
		   player.pos.y + 30 > this.pos.y - player.vel.x &&
		   player.pos.y - 30 < this.pos.y + this.size.y + player.vel.x) {
			player.vel.x = 0;
			player.pos.x = this.pos.x - 30;
		}
		if(player.pos.x - 30 > this.pos.x + this.size.x - 6 &&
		   player.pos.x - 30 < this.pos.x + this.size.x &&
		   player.pos.y + 30 > this.pos.y + player.vel.x &&
		   player.pos.y - 30 < this.pos.y + this.size.y - player.vel.x) {
			player.vel.x = 0;
			player.pos.x = this.pos.x + this.size.x + 30;
		}
		if(player.pos.x + 30 > this.pos.x &&
		   player.pos.x - 30 < this.pos.x + this.size.x &&
		   player.pos.y + 30 < this.pos.y + 6 &&
		   player.pos.y + 30 > this.pos.y) {
			player.vel.y = 0;
			player.pos.y = this.pos.y - 30;
		}
		if(player.pos.x + 30 > this.pos.x &&
		   player.pos.x - 30 < this.pos.x + this.size.x &&
		   player.pos.y - 30 < this.pos.y + this.size.y &&
		   player.pos.y - 30 > this.pos.y + this.size.y - 6) {
			player.vel.y = 0;
			player.pos.y = this.pos.y + this.size.y + 30;
		}
	}
	
	this.draw = function() {
		c.fillStyle = "black";
		c.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
	}
}
platforms.push(new Platform(player.pos.x + 100, player.pos.y - 50, 20, 100));

var script = document.createElement("script");
script.src = "MovingPlatform.js";
document.body.appendChild(script);