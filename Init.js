var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
var platforms = [];

var script = document.createElement("script");
script.src = "GameObject.js";
document.body.appendChild(script);
