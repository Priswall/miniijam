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
        player.pos = this.spawn;
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
}

var script = document.createElement("script");
script.src = "GameObject.js";
document.body.appendChild(script);
