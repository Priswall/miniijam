function Monster(x, y, id) {
    gameObject.call(this, x, y, null);
    this.destination = new Vector(this.pos.x, this.pos.y);
    this.target = new Vector(this.pos.x, this.pos.y);
    this.mag = Math.sqrt(this.target.x * this.target.x + this.target.y * this.target.y);
    this.frame = 0;
    this.isAttacking = false;

    this.update = function() {
        if(player.isSinging && !this.isAttacking) {
            this.target.x = this.pos.x - player.pos.x;
            this.target.y = this.pos.y - player.pos.y;
            this.destination.x = player.pos.x;
            this.destination.y = player.pos.y;
        }
        if(Math.abs(this.pos.x - this.destination.x) < 2 || Math.abs(this.pos.y - this.destination.y) < 2)
            this.frame = 0;
        if(Math.abs(player.pos.x - this.pos.x) < 60 &&
           Math.abs(player.pos.y - this.pos.y) < 60) {
            if(this.frame > 2) {
                transition.transitioningState = 1;
                transition.onhalfway = function() {
                    levels[currentLVL].loaded = false;
                };
            }
            if(!this.isAttacking) {
                this.isAttacking = true;
                this.frame = 2;
            }
        }
        if(this.isAttacking) {
            this.frame += 0.1;
            player.iscrying = true;
        }
        else player.iscrying = false;
        if(this.frame > 4) {
            this.frame = 0;
            this.isAttacking = false;
        }
        if((Math.abs(this.pos.x - this.destination.x) > 2 || Math.abs(this.pos.y - this.destination.y) > 2) &&
            !this.isAttacking) {
            this.mag = Math.sqrt(this.target.x * this.target.x + this.target.y * this.target.y);
            this.pos.x -= (this.target.x / this.mag) * 1.5;
            this.pos.y -= (this.target.y / this.mag) * 1.5;
            this.frame = 1;
        }
    };

    this.draw = function() {
        c.save();
        c.translate(this.pos.x - 45, this.pos.y - (80 + (Math.sin(frames / 10) * 3)));
        if((this.target.x / this.mag) < 0) {
            c.scale(-1, 1);
            c.drawImage(monsterFrames[Math.floor(this.frame)], 0, 0, -90, 90);
        }
        else
            c.drawImage(monsterFrames[Math.floor(this.frame)], 0 ,0, 90, 90);
        c.restore();
    };
}

var script = document.createElement("script");
script.src = "LevelInit.js";
document.body.appendChild(script);
