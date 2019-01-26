function NPC(x, y, text) {
    gameObject.call(this, x, y, null);
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
        if(player.pos.x + 15 > this.pos.x &&
           player.pos.x - 15 < this.pos.x + 30 &&
           player.pos.y + 15 > this.pos.y &&
           player.pos.y - 15 < this.pos.y + 30) {
               if(this.a < 100) this.a += 5;
        }
        else {
            if(this.a > 0) this.a -= 5;
        }
        c.fillStyle = "rgba(0, 0, 0, " + this.a / 500 + ")";
        c.fillRect(this.pos.x - 160, this.pos.y - (40 + (15 * this.text.length)), 265, (35 + (15 * this.text.length)));
        c.fillStyle = "rgba(255, 255, 255, " + this.a / 100 + ")";
        c.font = "25px Arial";
        c.textAlign = "left";
        for(var i = this.text.length - 1; i >= 0 ; i--) {
            c.fillText(this.text[i], this.pos.x - 150, this.pos.y - (50 - (25 * i)));
        }
    };

    this.draw = function() {
        c.fillStyle = "rgb(150, 150, 150)";
        c.fillRect(this.pos.x, this.pos.y, 30, 30);
    };
}

var script = document.createElement("script");
script.src = "Platform.js";
document.body.appendChild(script);
