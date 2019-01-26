function Level(spawn, camLimitsX, camLimitsY, platforms, monsters, npcs) {
    this.spawn = spawn;
    this.camXBounds = new Vector(camLimitsX.x, camLimitsX.y);
    this.camYBounds = new Vector(camLimitsX.x, camLimitsY.y);
    this.ogplatforms = platforms;
    this.ogmonsters = monsters;
    this.ognpcs = npcs;
    this.platforms = platforms;
    this.monsters = monsters;
    this.npcs = npcs;
    this.loaded = false;

    this.load = function() {
        player.pos.x = this.spawn.x;
        player.pos.y = this.spawn.y;
        player.vel = new Vector(0, 0);
        if(this.camXBounds.x === 0 && this.camXBounds.y === 0)
            cam.x = canvas.width / 2;
        else
   		   cam.x = -player.pos.x + (canvas.width / 2);
       if(this.camYBounds.x === 0 && this.camYBounds.y === 0)
           cam.y = canvas.height / 2;
       else
  		   cam.y = -player.pos.y + (canvas.height / 2);
        this.platforms = this.ogplatforms;
        this.monsters = this.ogmonsters;
        this.npcs = this.ognpcs;
        this.loaded = true;
    };

    this.update = function() {
        if(player.pos.x - 15 < this.camXBounds.x - (canvas.width / 2)) {
            player.pos.x = this.camXBounds.x - (canvas.width / 2) + 15;
            player.vel.x = 0;
        }

        this.platforms.forEach((platform) => {
            platform.update();
            if(platform.id == "movingplatform") platform.move();
        });
        this.monsters.forEach((monster) => { monster.update(); });
        this.npcs.forEach((npc) => { npc.update(); });
        if(player.pos.x - 15 > this.camXBounds.y + (canvas.width / 2)) {
            transition.transitioningState = 1;
            if(currentLVL < levels.length - 1)
                transition.onhalfway = function() { currentLVL++; };
            else
                transition.onhalfway = function() { screen = "Ending"; };
        }
        if(player.pos.y - 15 > this.camYBounds.y + (canvas.height / 2) && transition.transitioningState == 0) {
            transition.transitioningState = 1;
            var temp = this;
            transition.onhalfway = function() { temp.loaded = false; temp.load(); };
        }
    }

    this.draw = function() {
        this.platforms.forEach((platform) => { platform.draw(); });
        this.monsters.forEach((monster) => { monster.draw(); });
        this.npcs.forEach((npc) => { npc.draw(); });
    }
}

var script = document.createElement("script");
script.src = "GameObject.js";
document.body.appendChild(script);
