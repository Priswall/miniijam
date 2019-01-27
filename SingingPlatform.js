function singingPlatform(x, y, w, h, dx, dy, moveType, speed) {
	gameObject.call(this, x, y, "movingplatform", null);
	this.size = new Vector(w, h);
	this.destination = new Vector(dx, dy);
	this.ogpos = new Vector(x, y);
	this.moveType = moveType;
	this.vel = new Vector(0, 0);
	this.frames = 0;
	if(speed != undefined) this.speed = speed;

	this.move = function() {
		if(player.isSinging) {
			this.vel.x = (this.pos.x - this.destination.x) / this.speed;
			this.vel.y = (this.pos.y - this.destination.y) / this.speed;
			this.pos.x -= this.vel.x;
			this.pos.y -= this.vel.y;
		}
		if(!player.isSinging) {
			this.vel.x = (this.pos.x - this.ogpos.x) / this.speed;
			this.vel.y = (this.pos.y - this.ogpos.y) / this.speed;
			this.pos.x -= this.vel.x;
			this.pos.y -= this.vel.y;
		}
	}

	this.update = function() {
		if(this.frames / 100 > Math.PI / 4 || this.moveType != "fade") {
			if(player.pos.x + 35 > this.pos.x &&
			   player.pos.x + 35 < this.pos.x + (this.size.x / 2) &&
			   player.pos.y > this.pos.y + (10 + player.vel.y) &&
			   player.pos.y - 80 < this.pos.y + this.size.y) {
				player.vel.x = 0;
				player.pos.x = this.pos.x - 35;
			}
			if(player.pos.x - 35 > this.pos.x + this.size.x - (this.size.x / 2) &&
			   player.pos.x - 35 < this.pos.x + this.size.x &&
			   player.pos.y > this.pos.y + (10 + player.vel.y) &&
			   player.pos.y - 80 < this.pos.y + this.size.y) {
				player.vel.x = 0;
				player.pos.x = this.pos.x + this.size.x + 35;
			}
			if(player.pos.x + 35 > this.pos.x &&
			   player.pos.x - 35 < this.pos.x + this.size.x &&
			   player.pos.y < this.pos.y + (this.size.y / 2) &&
			   player.pos.y > this.pos.y) {
				player.vel.y = 0;
				player.pos.y = this.pos.y;
				player.pos.x -= this.vel.x;
				player.pos.y -= this.vel.y;
				player.canJump = true;
			}
			if(player.pos.x + 35 > this.pos.x &&
			   player.pos.x - 35 < this.pos.x + this.size.x &&
			   player.pos.y - 80 < this.pos.y + this.size.y &&
			   player.pos.y - 80 > this.pos.y + this.size.y - (this.size.y / 2)) {
				player.vel.y = 0;
				player.pos.y = this.pos.y + this.size.y + 80;
			}
		}
	}

	this.draw = function() {
		c.drawImage(singingPlatformimg, this.pos.x, this.pos.y);
	}
}

var script = document.createElement("script");
script.src = "Monster.js";
document.body.appendChild(script);
