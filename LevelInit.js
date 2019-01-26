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
        new NPC(-130, -30, "Use [D] or [>] to   move right")
    ]
));
levels.push(
    new Level(
    new Vector(-550, -115),
    new Vector(0, 0),
    new Vector(0, 0),
    [
        new Platform(-700, -100, 700, 50),
        new Platform(100, -700, 600, 750),
        new Platform(-100, 50, 800, 50),
        new Platform(-700, -50, 500, 700),
        new Platform(-200, 200, 800, 300),
    ],
    [],
    [
        new NPC(-130, -130, "Use [A] or [<] to   move right")
    ]
));
levels.push(
    new Level(
    new Vector(-550, 185),
    new Vector(0, 0),
    new Vector(0, 0),
    [
        new Platform(-50, -100, 700, 50),
        new Platform(-100, -50, 50, 50),
        new Platform(-800, -700, 600, 750),
        new Platform(-600, 50, 550, 50),
        new Platform(-50, 100, 50, 50),
        new Platform(100, -50, 500, 700),
        new Platform(-600, 200, 800, 300),
    ],
    [],
    [
        new NPC(-350, 170, "Use [W] or [^] to   move jump")
    ]
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
        new NPC(-130, -30, "Try holding [SPACE] to use the amulet")
    ]
));

var script = document.createElement("script");
script.src = "Draw.js";
document.body.appendChild(script);
