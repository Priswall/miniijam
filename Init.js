var canvas = document.createElement("canvas");
canvas.width = 1050;
canvas.height = 600;
var c = canvas.getContext("2d");

function Vector(x, y) {
	this.x = x;
	this.y = y;
}

function Sprite(img, x, y, w, h) {
	this.pos = new Vector(x, y);
	this.size = new Vector(w, h);
	this.img = img;
}

var keys = [];
var mouse = new Vector(0, 0);
var cam = new Vector(0, 0);
var screen = "Menu";
var frames = 0;
var currentLVL = 0;
var currentCuscenePic = 0;
var levels = [];
var cutscenes = [];
var mouseClicked = false;
var mouseIsPressed = false;

var startButton = new Image();
startButton.src = "gfx/startbutton.png";
var titlescreen = new Image();
titlescreen.src = "gfx/title screen.png";
var backgrounds = [
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image()
];
backgrounds[0].src = "gfx/backgrounds/backgroundgray.png";
backgrounds[1].src = "gfx/backgrounds/backgroundyellow.png";
backgrounds[2].src = "gfx/backgrounds/backgroundred.png";
backgrounds[3].src = "gfx/backgrounds/backgroundpurple.png";
backgrounds[4].src = "gfx/backgrounds/backgroundblue.png";
var owo = new Image();
owo.src = "gfx/character sprites/owo.png";
var npcimg = new Image();
npcimg.src = "gfx/character sprites/npc.png";
var owowing = new Image();
owowing.src = "gfx/character sprites/owowing.png";
var owo2 = new Image();
owo2.src = "gfx/character sprites/owo2.png";
var singingPlatformimg = new Image();
singingPlatformimg.src = "gfx/environment sprites/platform.png";
var grass = new Image();
grass.src = "gfx/environment sprites/grassblock.png";

for(var i = 1; i < 15; i++) {
	cutscenes[i - 1] = new Image();
	cutscenes[i - 1].src = "gfx/cutscenes/" + i + ".png";
}

cutscenes[14] = new Image();
cutscenes[14].onload = function() {
	var script = document.createElement("script");
	script.src = "Transition.js";
	document.body.appendChild(script);
}
cutscenes[14].src = "gfx/cutscenes/15.png";
