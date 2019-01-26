function Monster(x, y, id) {
    gameObject.call(this, x, y, null);
    this.destination = new Vector(this.pos.x, this.pos.y);
    this.target = new Vector(this.pos.x, this.pos.y);
    this.mag = Math.sqrt(this.target.x * this.target.x + this.target.y * this.target.y);

    this.update = function() {
        if(player.isSinging) {
            this.target.x = this.pos.x - player.pos.x;
            this.target.y = this.pos.y - player.pos.y;
            this.destination.x = player.pos.x;
            this.destination.y = player.pos.y;
        }
        if(Math.abs(this.pos.x - this.destination.x) > 2 || Math.abs(this.pos.y - this.destination.y) > 2) {
            this.mag = Math.sqrt(this.target.x * this.target.x + this.target.y * this.target.y);
            this.pos.x -= (this.target.x / this.mag) * 1.5;
            this.pos.y -= (this.target.y / this.mag) * 1.5;
        }
    };

    this.draw = function() {
        c.fillStyle = "rgb(155, 0, 155)";
        c.fillRect(this.pos.x - 15, this.pos.y - 15, 30, 30);
    };
}

var script = document.createElement("script");
script.src = "LevelInit.js";
document.body.appendChild(script);
