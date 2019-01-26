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

for(var i = 1; i < 15; i++) {
	cutscenes[i - 1] = new Image();
	cutscenes[i - 1].src = "gfx/" + i + ".png";
}

cutscenes[14] = new Image();
cutscenes[14].onload = function() {
	var script = document.createElement("script");
	script.src = "Transition.js";
	document.body.appendChild(script);
}
cutscenes[14].src = "gfx/15.png";
