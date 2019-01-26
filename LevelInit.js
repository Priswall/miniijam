/*

  Level(spawn, camLimitsX, camLimitsY, platforms, monsters, npcs)
Platform(x, y, w, h)
movingPlatform(x, y, w, h, dx, dy, moveType)
singingPlatform(x, y, w, h, dx, dy, moveType, speed)
Monster(x, y, id)

*/
levels.push(
    new Level(
    new Vector(-130, 45),
    new Vector(0, 0),
    new Vector(0, 0),
    [
        new Platform(-999, 60, 900, 999),
        new Platform(-200, 0, 200, 999),
        new Platform(400, -60, 900, 999),
        new singingPlatform(150, 200, 100, 20, 150, -25, "sin", 50)
    ],
    [],
    []
));

var script = document.createElement("script");
script.src = "Draw.js";
document.body.appendChild(script);
