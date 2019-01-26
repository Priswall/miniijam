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
var screen = "Game";
var frames = 0;
var currentLVL = 0;
var levels = [];

var script = document.createElement("script");
script.src = "Level.js";
document.body.appendChild(script);
