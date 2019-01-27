function NPC(x, y, text) {
    gameObject.call(this, x, y, null);
    this.random = Math.random();
    this.text = [];
    this.a = 0;
    for(var i = 0; i < text.length; i += 20) {
        if(text[i + 20] != undefined) {
            this.text[i / 20] = text.substring(i, i + 20);
        } else {
            this.text[i / 20] = text.substring(i, text.length);
        }
    }

    this.update = function() {
        if(player.pos.x + 45 > this.pos.x - 45 &&
           player.pos.x - 45 < this.pos.x + 45 &&
           player.pos.y + 45 > this.pos.y - 90 &&
           player.pos.y - 45 < this.pos.y) {
               if(this.a < 100) this.a += 5;
        }
        else {
            if(this.a > 0) this.a -= 5;
        }
        c.fillStyle = "rgba(0, 0, 0, " + this.a / 500 + ")";
        c.fillRect(this.pos.x - 160, this.pos.y - (145 + (15 * this.text.length)), c.measureText(this.text[0]).width * 2.5 + 10, (30 + (15 * this.text.length)));
        c.fillStyle = "rgba(255, 255, 255, " + this.a / 100 + ")";
        c.font = "25px Arial";
        c.textAlign = "left";
        for(var i = this.text.length - 1; i >= 0 ; i--) {
            c.fillText(this.text[i], this.pos.x - 150, this.pos.y - (150 - (25 * i)));
        }
    };

    this.draw = function() {
		c.save();
		c.translate(this.pos.x - 45, this.pos.y - 95);
		c.drawImage(npcimg, 0, Math.sin((frames / 10) + this.random) * 3, 90, 90);
		c.restore();
		c.save();
		c.translate(this.pos.x - 15, this.pos.y - (40 - (Math.sin((frames / 10) + this.random) * 3)));
        c.rotate((Math.sin(frames / 2) * 10) * (Math.PI / 180));
		c.drawImage(owowing, -15, -5, 15, 10);
		c.restore();

		c.save();
		c.translate(this.pos.x + 15, this.pos.y - (45 - (Math.sin((frames / 10) + this.random) * 3)));
		c.scale(-1, 1);
		c.rotate((Math.sin(frames / 2) * 10) * (Math.PI / 180));
		c.drawImage(owowing, 0, -5, -15, 10);
		c.restore();
    };
}

var script = document.createElement("script");
script.src = "Platform.js";
document.body.appendChild(script);
