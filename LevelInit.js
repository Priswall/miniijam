/*

  Level(spawn, camLimitsX, camLimitsY, platforms, monsters, npcs)
Platform(x, y, w, h)
movingPlatform(x, y, w, h, dx, dy, moveType)
singingPlatform(x, y, w, h, dx, dy, moveType, speed)
Monster(x, y, id)

*/
levels.push(
    new Level(
    new Vector(-350, -15),
    new Vector(0, 0),
    new Vector(0, 0),
    [
        new Platform(-700, 0, 1400, 700)
    ],
    [],
    [
        new NPC(-130, 0, "Use [D] or [>] to   move right")
    ],
    1
));
levels.push(
    new Level(
    new Vector(-550, -115),
    new Vector(-100, 800),
    new Vector(0, 0),
    [
        new Platform(-700, -70, 500, 700),
        new Platform(-700, -100, 700, 50),
        new Platform(-100, 50, 800, 50),
        new Platform(100, -700, 600, 770),
        new Platform(-200, 200, 800, 300),
        new Platform(400, 50, 600, 50),
        new Platform(200, -700, 600, 770),
        new Platform(400, 200, 800, 300),
        new Platform(1100, -70, 500, 700),
        new Platform(900, -100, 700, 50)
    ],
    [],
    [
        new NPC(-130, -100, "Use [A] or [<] to   move right"),
        new NPC(-350, 200, "Use [W] or [^] to  move jump")
    ],
    1
));
levels.push(
    new Level(
    new Vector(-350, 45),
    new Vector(0, 0),
    new Vector(0, 0),
    [
        new Platform(-999, 60, 900, 999),
        new Platform(-200, 0, 200, 999),
        new Platform(400, -60, 900, 999),
        new singingPlatform(150, 200, 100, 20, 150, -25, "sin", 50)
    ],
    [],
    [
        new NPC(-130, 0, "Try holding [SPACE] to use the amulet")
    ],
    1
));

var script = document.createElement("script");
script.src = "Draw.js";
document.body.appendChild(script);
